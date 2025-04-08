import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { User } from './entity/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true}),
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    password: 'postgres',
    username: 'postgres',
    entities: [User],
    database: 'moviebooker',
    synchronize: true,
    logging: true,
  }),
  UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
