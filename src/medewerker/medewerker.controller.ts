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
import { Prisma, PrismaClient } from '@prisma/client';
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
  async createMedewerker(@Body() dto: CreateMedewerkerDto) {
    try {
      await this.medewerkerService.createMedewerker(dto);
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        // The .code property can be accessed in a type-safe manner
        if (e.code === 'P2002') {
          console.log(
            'There is a unique constraint violation, a new user cannot be created with this email'
          )
        }
      }
      throw e
    }
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
