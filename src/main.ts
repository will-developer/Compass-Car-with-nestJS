import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Remove campos não especificados nos DTOs
      forbidNonWhitelisted: true, // Bloqueia campos não permitidos
      transform: true, // Transforma os dados para os tipos corretos
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
