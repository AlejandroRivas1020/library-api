import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { seedUsers } from './modules/seeders/users.seed';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Library API')
    .setDescription('API for managing books')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api/docs', app, document);

  await seedUsers();

  app.useGlobalPipes(new ValidationPipe());
  const port = 3000;
  await app.listen(port);
  Logger.log(`app is running at http://localhost:${port}`);
  Logger.log(
    `swagger documentation available at http://localhost:${port}/api/docs`,
  );
}
bootstrap();
