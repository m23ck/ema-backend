import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsString,
  IsEmail,
} from 'class-validator';

export class CreateMedewerkerDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  voornaam: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  achternaam: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  geslacht: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  telefoon: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  straatnaam: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  huisnummer: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  district: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  isActive: boolean;
}
