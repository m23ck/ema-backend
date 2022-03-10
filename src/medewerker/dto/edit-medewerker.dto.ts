import { IsBoolean, IsInt, IsOptional, IsString } from 'class-validator';

export class EditMedewerkerDto {
  @IsString()
  @IsOptional()
  voornaam?: string;

  @IsString()
  @IsOptional()
  achternaam?: string;

  @IsString()
  @IsOptional()
  geslacht?: string;

  @IsString()
  @IsOptional()
  email?: string;

  @IsInt()
  @IsOptional()
  telefoon?: number;

  @IsString()
  @IsOptional()
  straatnaam?: string;

  @IsString()
  @IsOptional()
  huisnummer?: string;

  @IsString()
  @IsOptional()
  district?: string;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}
