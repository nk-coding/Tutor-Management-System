import { ApiProperty } from '@nestjs/swagger';
import {
    IsArray,
    IsBoolean,
    IsEmail,
    IsEnum,
    IsUUID,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
    Min,
} from 'class-validator';
import { IsLuxonDateTime } from '../../helpers/validators/luxon.validator';
import { IsMapEntry, IsNumberMapEntry } from '../../helpers/validators/mapArray.validator';
import { AttendanceState, IAttendanceDTO } from 'shared/model/Attendance';
import { IExerciseGradingDTO, IGradingDTO, IPresentationPointsDTO } from 'shared/model/Gradings';
import { ICakeCountDTO, IStudentDTO, StudentStatus } from 'shared/model/Student';

export class StudentDTO implements IStudentDTO {
    @IsNotEmpty()
    firstname!: string;

    @IsNotEmpty()
    lastname!: string;

    @IsOptional()
    @IsString()
    iliasName?: string;

    @IsNotEmpty()
    @IsEnum(StudentStatus)
    status!: StudentStatus;

    @IsNotEmpty()
    tutorial!: string;

    @ApiProperty({ type: String })
    @IsOptional()
    @IsString()
    courseOfStudies?: string;

    @ApiProperty({ type: String })
    @IsOptional()
    @IsEmail()
    email?: string;

    @ApiProperty({ type: String })
    @IsOptional()
    @IsString()
    matriculationNo?: string;

    @ApiProperty({ type: String })
    @IsOptional()
    @IsUUID()
    team?: string;

    constructor(fields: IStudentDTO) {
        Object.assign(this, fields);
    }
}

export class AttendanceDTO implements IAttendanceDTO {
    @IsLuxonDateTime()
    date!: string;

    @IsOptional()
    @IsString()
    note?: string;

    @IsOptional()
    @IsEnum(AttendanceState)
    state?: AttendanceState;
}

export class CakeCountDTO implements ICakeCountDTO {
    @IsNumber()
    @Min(0)
    cakeCount!: number;
}

export class ExerciseGradingDTO implements IExerciseGradingDTO {
    @IsOptional()
    @IsString()
    comment?: string;

    @IsOptional()
    @IsNumber()
    additionalPoints?: number;

    @IsOptional()
    @IsNumber()
    points?: number;

    @IsOptional()
    @IsArray()
    @IsNumberMapEntry({ each: true })
    subExercisePoints?: [string, number][];
}

export class GradingDTO implements IGradingDTO {
    @IsArray()
    @IsMapEntry(ExerciseGradingDTO, { each: true })
    exerciseGradings!: [string, ExerciseGradingDTO][];

    @IsBoolean()
    createNewGrading!: boolean;

    @IsOptional()
    @IsString()
    sheetId?: string;

    @IsOptional()
    @IsString()
    examId?: string;

    @IsOptional()
    @IsString()
    shortTestId?: string;

    @IsOptional()
    @IsString()
    comment?: string;

    @IsOptional()
    @IsNumber()
    additionalPoints?: number;
}

export class PresentationPointsDTO implements IPresentationPointsDTO {
    @IsString()
    sheetId!: string;

    @IsNumber()
    @Min(0)
    points!: number;
}
