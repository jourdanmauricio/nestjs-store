import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // elimina del payload los atributos que no existen en la clase
      forbidNonWhitelisted: true, // Si llega un atributo desconocido arroja error
    }),
  );

  // Configuración Swagger en NestJS
  const config = new DocumentBuilder()
    .setTitle('API')
    .setDescription('Documentación Nest Store API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  // URL API
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();
