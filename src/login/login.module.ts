import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { UserService } from './login.service';

@Module({
  imports: [],
  controllers: [LoginController],
  providers: [UserService],
})
export class AuthModule {}
