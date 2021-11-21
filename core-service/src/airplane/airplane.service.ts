import { Airplane } from './dto/airplane';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AirplaneService {
  constructor(@InjectModel('Airplane') private readonly airplaneModel: Model<Airplane>){}

  async createRegister(register: Airplane) {
    return await new this.airplaneModel(register).save();
  }
}
