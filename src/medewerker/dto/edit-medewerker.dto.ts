import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsOptional, IsString } from 'class-validator';

export class EditMedewerkerDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  voornaam?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  achternaam?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  geslacht?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  email?: string;

  @ApiProperty()
  @IsInt()
  @IsOptional()
  telefoon?: number;

  @ApiProperty()
  @IsString()
  @IsOptional()
  straatnaam?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  huisnummer?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  district?: string;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}
