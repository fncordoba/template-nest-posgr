import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // starting the server
  await app.listen(3000, '0.0.0.0', () => {
    const message = `app listening at [3000]`;
    Logger.log(message);
  });
}
bootstrap();
