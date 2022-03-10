import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateMedewerkerDto, EditMedewerkerDto } from './dto';
import { MedewerkerService } from './medewerker.service';

@Controller('medewerkers')
export class MedewerkerController {
  constructor(private medewerkerService: MedewerkerService) {}

  @Get()
  getMedewerkers() {
    return this.medewerkerService.getMedewerkers();
  }

  @Get(':id')
  getMedewerkerById(@Param('id', ParseIntPipe) medewerkerId: number) {
    return this.medewerkerService.getMedewerkerById(medewerkerId);
  }

  @Post()
  createMedewerker(@Body() dto: CreateMedewerkerDto) {
    return this.medewerkerService.createMedewerker(dto);
  }

  @Patch(':id')
  editMedewerkerById(
    @Param('id', ParseIntPipe) medewerkerId: number,
    @Body() dto: EditMedewerkerDto,
  ) {
    return this.medewerkerService.editMedewerkerById(medewerkerId, dto);
  }

  @Delete(':id')
  deleteMedewerkerById(@Param('id', ParseIntPipe) medewerkerId: number) {
    return this.medewerkerService.deleteMedewerkerById(medewerkerId);
  }
}
