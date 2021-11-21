import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AirplaneModule } from './airplane/airplane.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:example@mongo:27017/kafka'),
    AirplaneModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}