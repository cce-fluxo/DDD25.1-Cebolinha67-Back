import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3100;

  app.enableCors({
    origin: ['http://localhost:3100', 'http://localhost:8081', 'http://192.168.68.109:8081', 'http://192.168.15.10:8081', 'http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('usuarios') // colocar todas as nossas tags em diferentes addTag
    .addTag('notificacoes')
    .addTag('imagens')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
  });
}

bootstrap();
