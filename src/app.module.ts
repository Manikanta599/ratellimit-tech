import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginEntity } from './login/login.entity';
import { AuthModule } from './login/login.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // or your chosen DB type
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'auth',
      entities: [LoginEntity],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([LoginEntity]),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
