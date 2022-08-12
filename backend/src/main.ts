import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('');
  app.enableCors();

  const port = process.env.PORT || 3001;
  console.log(port);
  await app.listen(port);
}
bootstrap();
