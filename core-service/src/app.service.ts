import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Core } from './interfaces/core.model';

@Injectable()
export class AppService {
  constructor(@InjectModel('Core') private readonly coreModel: Model<Core>) {}

  async createRegister(register: Core) {
    return await new this.coreModel(register).save();
  }
}
