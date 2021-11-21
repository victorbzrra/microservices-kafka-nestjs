import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AirplaneService } from './airplane.service';
import { AirplaneController } from './airplane.controller';
import { AirplaneSchema } from './schemas/airplane.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Airplane', schema: AirplaneSchema}]),
  ],
  controllers: [AirplaneController],
  providers: [AirplaneService],
})
export class AirplaneModule {}
