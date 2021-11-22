import { Register } from './dto/register';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class RegisterService {
  constructor(@InjectModel('Register') private readonly registerModel: Model<Register>){}

  async createRegister(register: Register) {
    return await new this.registerModel(register).save();
  }
}
