import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      // the whitelist param makes sure only defined params get picked up
      whitelist: true,
    }),
  );
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Medewerkersbeheer API')
    .setDescription('Documentatie voor de medewerkersbeheer API')
    .setVersion('1.0')
    .addTag('medewerkers')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentatie', app, document);


  await app.listen(4423);
}
bootstrap();
