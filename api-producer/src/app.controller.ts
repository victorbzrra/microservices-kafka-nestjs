import { Observable } from 'rxjs';
import { Register } from './app.interface';
import { Body, Controller, OnModuleInit, Post } from '@nestjs/common';
import { Client, ClientKafka, Transport } from '@nestjs/microservices';

@Controller()
export class AppController implements OnModuleInit {
  @Client({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'api',
        brokers: ['localhost:9092'],
      },
      consumer: {
        groupId: 'api-producer',
        allowAutoTopicCreation: true
      }
    }
  })

  private client: ClientKafka;
  
  async onModuleInit() {
    const requestPatters = ['api-core'];

    requestPatters.forEach(async pattern => {
      this.client.subscribeToResponseOf(pattern);
      await this.client.connect();
    });
  }

  @Post()
  sendRegister(@Body() register: Register ): Observable<Register> {
    return this.client.send('api-core', register);
  }
}
