import { Controller, OnModuleInit } from '@nestjs/common';
import { Client, ClientKafka, MessagePattern, Payload, Transport } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { AirplaneService } from './airplane.service';
import { Airplane } from './dto/airplane';

@Controller('airplane')
export class AirplaneController implements OnModuleInit{
  @Client({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'core',
        brokers: ['localhost:9092'],
      },
      consumer: {
        groupId: 'core-consumer',
        allowAutoTopicCreation: true
      }
    }
  })

  private client: ClientKafka;
  
  async onModuleInit() {
    const requestPatters = ['core-monitor'];

    requestPatters.forEach(async pattern => {
      this.client.subscribeToResponseOf(pattern);
      await this.client.connect();
    });
  }

  constructor(private readonly airplaneService: AirplaneService){}

  @MessagePattern('api-core-airplane')
  async createRegister(@Payload() register: any): Promise<Airplane> {
    this.sendToConsumer(register.value);
    return this.airplaneService.createRegister(register.value);
  }

  sendToConsumer(register: any): Observable<any>{
    return this.client.emit('core-monitor', register);
  }
}
