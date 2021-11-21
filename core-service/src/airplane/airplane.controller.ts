import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AirplaneService } from './airplane.service';
import { Airplane } from './dto/airplane';

@Controller('airplane')
export class AirplaneController {
  constructor(private readonly airplaneService: AirplaneService){}

  @MessagePattern('info-routine')
  async createRegister(@Payload() register: Airplane): Promise<Airplane> {
    return this.airplaneService.createRegister(register);
  }
}
