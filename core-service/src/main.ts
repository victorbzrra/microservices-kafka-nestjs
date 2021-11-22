import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'core',
        brokers: ['localhost:9092'],
      },
      consumer: {
        groupId: 'core-service',
        allowAutoTopicCreation: true
      }
    }
  });
  await app.listen();
}
bootstrap();
