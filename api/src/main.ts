import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SeederService } from './services/seeder.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  const options = new DocumentBuilder()
    .setTitle('SwissPine')
    .setDescription('Test Project')
    .setVersion('1.0')
    .addTag('swisspine')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/docs', app, document);
  app.enableCors({
    origin: [
      'http://localhost:4200'
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept, Planner-Id',
    credentials: true,
  });
  const seeder = app.get(SeederService);
  await seeder.seedAll();
  await app.listen(3000);
}

bootstrap().then();
