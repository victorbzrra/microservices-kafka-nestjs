import { Controller, OnModuleInit } from '@nestjs/common';
import { Client, ClientKafka, MessagePattern, Payload, Transport } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { RegisterService } from './register.service';
import { Register } from './dto/register';

@Controller('register')
export class RegisterController implements OnModuleInit{
  @Client({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'core',
        brokers: ['localhost:9092'],
      },
      consumer: {
        groupId: 'core-producer',
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

  constructor(private readonly registerService: RegisterService){}

  @MessagePattern('api-core')
  async createRegister(@Payload() register: any): Promise<Register> {
    this.sendToConsumer(register.value);
    return this.registerService.createRegister(register.value);
  }

  sendToConsumer(register: any): Observable<any>{
    return this.client.emit('core-monitor', register);
  }
}
