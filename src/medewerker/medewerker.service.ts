import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMedewerkerDto, EditMedewerkerDto } from './dto';

@Injectable()
export class MedewerkerService {
  constructor(private prisma: PrismaService) {}

  async createMedewerker(dto: CreateMedewerkerDto) {
    const medewerker = await this.prisma.medewerker.create({
      data: {
        ...dto,
      },
    });
    return medewerker;
  }

  getMedewerkers() {
    return this.prisma.medewerker.findMany();
  }

  getMedewerkerById(medewerkerId: number) {
    return this.prisma.medewerker.findFirst({
      where: {
        id: medewerkerId,
      },
    });
  }

  async editMedewerkerById(medewerkerId: number, dto: EditMedewerkerDto) {
    const medewerker = await this.prisma.medewerker.findUnique({
      where: {
        id: medewerkerId,
      },
    });
    if (!medewerker)
      throw new ForbiddenException(
        'Access to resources denied. Medewerker with such an ID does not exist!',
      );

    return this.prisma.medewerker.update({
      where: {
        id: medewerkerId,
      },
      data: {
        ...dto,
      },
    });
  }

  async deleteMedewerkerById(medewerkerId: number) {
    const medewerker = await this.prisma.medewerker.findUnique({
      where: {
        id: medewerkerId,
      },
    });
    if (!medewerker)
      throw new ForbiddenException(
        'Access to resources denied. Medewerker with such an ID does not exist!',
      );

    await this.prisma.medewerker.delete({
      where: {
        id: medewerkerId,
      },
    });
  }
}
