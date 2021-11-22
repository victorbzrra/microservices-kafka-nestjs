import { Controller, Logger } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);

  
  getHello(): void {
    this.logger.log('Hello world');
  }

  @MessagePattern('core-monitor')
  async showRegister(@Payload() register: any) {
    this.logger.log('Register: ');
    console.log(register.value);
  }
}
