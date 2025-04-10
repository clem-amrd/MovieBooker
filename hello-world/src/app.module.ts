import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from './entity/user.entity';
import { MovieModule } from './movie.module';
import { BookingModule } from './booking.module';
import { Booking } from './entity/booking.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get('DB_HOST'),
        port: config.get('DB_PORT'),
        password: config.get('DB_PASSWORD'),
        username: config.get('DB_USERNAME'),
        entities: [User, Booking],
        database: config.get('DB_NAME'),
        synchronize: true,
        logging: true,
        ssl: {
          rejectUnauthorized: false,
        },
      }),
    }),
    UserModule,
    MovieModule,
    BookingModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
