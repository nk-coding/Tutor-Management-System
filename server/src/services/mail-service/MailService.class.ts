import config from 'config';
import nodemailer from 'nodemailer';
import SMTPConnection, {
  AuthenticationTypeLogin,
  AuthenticationTypeOAuth2,
} from 'nodemailer/lib/smtp-connection';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { User } from 'shared/dist/model/User';
import { MailingStatus, FailedMail } from 'shared/dist/model/Mail';
import { InvalidConfigurationError } from '../../model/Errors';
import userService from '../user-service/UserService.class';
import Mail from 'nodemailer/lib/mailer';

interface AdditionalOptions {
  templates: {
    credentials: string;
  };
}

class MailingError {
  constructor(readonly userId: string, readonly message?: string) {}
}

type MailingResponse = SMTPTransport.SentMessageInfo | MailingError;
type TransportOptions = SMTPTransport.Options & AdditionalOptions;

class MailService {
  public async mailCredentials(): Promise<MailingStatus> {
    const options = this.getConfig();
    const smtpTransport = nodemailer.createTransport(options);

    const users = await userService.getAllUsers();
    const mails: Promise<MailingResponse>[] = [];
    const userToSendMailTo = users.filter(u => u.username !== 'admin' && !!u.temporaryPassword);

    // TODO: Check that e-mail is valid.
    for (const user of userToSendMailTo) {
      mails.push(this.sendMail(user, smtpTransport, options));
    }

    const status = this.generateMailingStatus(await Promise.all(mails), users);

    smtpTransport.close();
    return status;
  }

  public async mailSingleCredentials(userId: string): Promise<MailingStatus> {
    const options = this.getConfig();
    const smtpTransport = nodemailer.createTransport(options);

    const user = await userService.getUserWithId(userId);
    const status = await this.sendMail(user, smtpTransport, options);

    smtpTransport.close();

    return this.generateMailingStatus([status], [user]);
  }

  private async sendMail(
    user: User,
    transport: Mail,
    options: TransportOptions
  ): Promise<MailingResponse> {
    try {
      return await transport.sendMail({
        from: this.getUser(),
        to: `${user.email}`,
        subject: 'Credentials',
        text: this.getTextOfMail(user, options),
      });
    } catch (err) {
      return new MailingError(user.id, 'Could not send mail');
    }
  }

  private generateMailingStatus(mails: MailingResponse[], users: User[]): MailingStatus {
    const failedMailsInfo: FailedMail[] = [];
    let successFullSend: number = 0;

    for (const mail of mails) {
      if (mail instanceof MailingError) {
        const user = users.find(u => u.id === mail.userId) as User;
        failedMailsInfo.push({
          userId: user.id,
        });
      } else {
        successFullSend++;
      }
    }

    return { successFullSend, failedMailsInfo };
  }

  private getTextOfMail(user: User, { templates }: TransportOptions): string {
    return templates.credentials
      .replace('{{name}}', `${user.firstname} ${user.lastname}`)
      .replace('{{username}}', user.username)
      .replace('{{password}}', user.temporaryPassword || '');
  }

  private getConfig(): TransportOptions {
    const options = config.get<TransportOptions>('mailing');

    if (process.env.NODE_ENV === 'production') {
      this.assertValidConfig(options);

      return options;
    } else {
      return {
        templates: {
          credentials: options.templates.credentials,
        },
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
          user: 'cristal.keebler13@ethereal.email',
          pass: 'vTeyXZdDcphxAQTk9X',
        },
      };
    }
  }

  private getUser(): string {
    const options = this.getConfig();

    if (!options.auth || !options.auth.user) {
      throw new InvalidConfigurationError("Mailing auth must contain a 'user' property");
    }

    return options.auth.user;
  }

  private assertValidConfig(config: TransportOptions) {
    if (!config.templates) {
      throw new InvalidConfigurationError('No template settings were provided');
    }

    if (!config.templates.credentials) {
      throw new InvalidConfigurationError(
        'No template settings for the credentials mail were provided'
      );
    }

    if (!config.auth) {
      throw new InvalidConfigurationError('No authentication settings were provided');
    }

    if (this.isOAuth2(config.auth)) {
      const { user, clientId, clientSecret, refreshToken } = config.auth;

      if (!user || !clientId || !clientSecret || !refreshToken) {
        throw new InvalidConfigurationError(
          'user & clientId & clientSecret & refreshToken all have to be set in mailing auth options.'
        );
      }

      return;
    }

    if (this.isBasicAuth(config.auth)) {
      const { user, pass } = config.auth;

      if (!user || !pass) {
        throw new InvalidConfigurationError(
          'user && pass all have to be set in mailing auth options'
        );
      }

      return;
    }

    throw new InvalidConfigurationError(
      "Authentication type has to be 'OAuth2' or 'Login' (or undefined which defaults to 'Login')."
    );
  }

  private isOAuth2(auth: SMTPConnection.AuthenticationType): auth is AuthenticationTypeOAuth2 {
    return auth.type === 'oauth2' || auth.type === 'OAuth2' || auth.type === 'OAUTH2';
  }

  private isBasicAuth(auth: SMTPConnection.AuthenticationType): auth is AuthenticationTypeLogin {
    return !auth.type || auth.type === 'login' || auth.type === 'Login' || auth.type === 'LOGIN';
  }
}

const mailService = new MailService();

export default mailService;