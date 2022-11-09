import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  
  const port = parseInt(config.get<string>('SERVER_PORT'), 10) || 3006;
  
  const options = new DocumentBuilder()
    .setTitle('API REST de Prueba')
    .setDescription('API REST de Prueba')
    .setVersion('1.0')
    .build();
    
  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('docs', app, document, {
    swaggerOptions: {
      operationsSorter: 'alpha',
      tagsSorter: 'alpha',
    },
  });
  
  app.enableCors();
  await app.listen(port);
}
bootstrap();
