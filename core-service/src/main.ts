import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'app',
        brokers: ['localhost:9092'],
      },
      consumer: {
        groupId: 'app-consumer',
        allowAutoTopicCreation: true
      }
    }
  });
  await app.listen();
}
bootstrap();
