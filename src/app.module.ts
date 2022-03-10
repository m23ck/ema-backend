import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { MedewerkerModule } from './medewerker/medewerker.module';
import { PrismaModule } from './prisma/prisma.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MedewerkerModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
