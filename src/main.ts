import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
		const app = await NestFactory.create(AppModule, { cors: true });
		
		app.enableCors({
				origin: '*',
				methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
				credentials: true,
		});
		
		// Ativação do class-validator
		app.useGlobalPipes(
			  new ValidationPipe({
			  transform: true,
			  whitelist: true,
			  forbidNonWhitelisted: true,
			}),
		);
		    
		const config = new DocumentBuilder()
		.setTitle('API Example')
		.setDescription('Descrição da API')
		.setVersion('1.0')
		.addTag('<suas_tags dos controller>')
		.addBearerAuth(
			{
				type: 'http', 
				scheme: 'bearer', // como estamos passando (mesmo do insomnia)
				bearerFormat: 'JWT', // formato que usamos usualmente
			},
			'access-token', // aqui fica o nome do esquema de autenticação
		)
		.build();
		
		const documentFactory = () => SwaggerModule.createDocument(app, config);
		SwaggerModule.setup('api', app, documentFactory);
		
		await app.listen(process.env.PORT || 3000);
}

bootstrap();