import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RegisterModule } from './register/register.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:example@localhost:27017/'),
    RegisterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}