import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      // the whitelist param makes sure only defined params get picked up
      whitelist: true,
    }),
  );
  await app.listen(4423);
}
bootstrap();
