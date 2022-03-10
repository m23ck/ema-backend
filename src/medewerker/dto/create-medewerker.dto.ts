import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsString,
  IsEmail,
} from 'class-validator';

export class CreateMedewerkerDto {
  @IsNotEmpty()
  @IsString()
  voornaam: string;

  @IsNotEmpty()
  @IsString()
  achternaam: string;

  @IsNotEmpty()
  @IsString()
  geslacht: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsInt()
  telefoon: number;

  @IsNotEmpty()
  @IsString()
  straatnaam: string;

  @IsNotEmpty()
  @IsString()
  huisnummer: string;

  @IsNotEmpty()
  @IsString()
  district: string;

  @IsNotEmpty()
  @IsBoolean()
  isActive: boolean;
}
