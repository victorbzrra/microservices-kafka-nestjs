import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreSchema } from './interfaces/core.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/kafka'),
    MongooseModule.forFeature([{ name: 'registers', schema: CoreSchema}]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
