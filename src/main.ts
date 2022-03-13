import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MessagesModule } from './messages/messages.module';

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);

  // pipe to validate routes
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
