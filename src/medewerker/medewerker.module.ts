import { Module } from '@nestjs/common';
import { MedewerkerController } from './medewerker.controller';
import { MedewerkerService } from './medewerker.service';

@Module({
  controllers: [MedewerkerController],
  providers: [MedewerkerService]
})
export class MedewerkerModule {}
