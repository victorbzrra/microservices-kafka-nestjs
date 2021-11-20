import { Observable } from 'rxjs';
import { Body, Controller, OnModuleInit, Post } from '@nestjs/common';
import { Client, ClientKafka, Transport,  } from '@nestjs/microservices';
import { InfoRoutine } from './interfaces/info-interface';

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
        groupId: 'api-consumer',
        allowAutoTopicCreation: true
      }
    }
  })

  private client: ClientKafka;
  
  async onModuleInit() {
    const requestPatters = [
      'info-routine'
    ];

    requestPatters.forEach(async pattern => {
      this.client.subscribeToResponseOf(pattern);
      await this.client.connect();
    });
  }

  @Post()
  infoRoutine(@Body() info: InfoRoutine ): Observable<InfoRoutine> {
    return this.client.send('info-routine', info);
  }
}
