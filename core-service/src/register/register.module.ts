import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RegisterService } from './register.service';
import { RegisterController } from './register';
import { RegisterSchema } from './schemas/register.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Register', schema: RegisterSchema}]),
  ],
  controllers: [RegisterController],
  providers: [RegisterService],
})
export class RegisterModule {}
