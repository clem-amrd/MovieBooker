import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './controller/user.controller';
import { UserService } from './service/user.service';
import { UserModule } from './user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    password: 'postgres',
    username: 'postgres',
    entities: [],
    database: 'pgWithNest',
    synchronize: true,
    logging: true,
  }),
  UserModule],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {
    constructor(private dataSource: DataSource) {}
}
