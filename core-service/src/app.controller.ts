import { AppService } from './app.service';
import { Controller } from '@nestjs/common';
import { Core } from './interfaces/core.model';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('info-routine')
  async createRegister(@Payload() register: Core): Promise<Core> {
    return this.appService.createRegister(register);
  }

}
