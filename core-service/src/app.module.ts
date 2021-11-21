import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreSchema } from './interfaces/core.model';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:example@mongo:27017/kafka'),
    MongooseModule.forFeature([{ name: 'registers', schema: CoreSchema}]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
