import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { HasRoleGuard } from '../../guards/has-role.guard';
import { Role } from '../../shared/model/Role';
import { Tutorial, TutorialDTO } from '../../shared/model/Tutorial';
import { TutorialService } from './tutorial.service';

@Controller('tutorial')
export class TutorialController {
  constructor(private readonly tutorialService: TutorialService) {}

  @Get()
  @UseGuards(new HasRoleGuard([Role.ADMIN, Role.EMPLOYEE]))
  async getAllTutorials(): Promise<Tutorial[]> {
    const tutorials: Tutorial[] = await this.tutorialService.findAll();

    return tutorials;
  }

  @Post()
  @UseGuards(new HasRoleGuard(Role.ADMIN))
  async createTutorial(@Body() dto: TutorialDTO): Promise<Tutorial> {
    const tutorial = await this.tutorialService.create(dto);

    return tutorial;
  }
}