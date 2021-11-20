import { Controller, Get } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('info-routine')
  async index(@Payload() data: any): Promise<any> {
    console.log(data.value)
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
