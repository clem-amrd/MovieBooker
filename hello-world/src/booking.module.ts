import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { Booking } from './entity/booking.entity';
import { BookingService } from './service/booking.service';
import { BookingController } from './controller/booking.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Booking]),
    JwtModule.registerAsync({
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => ({
          secret: configService.get<string>('JWT_SECRET'),
          signOptions: { expiresIn: '1d' },
        }),
      }),],
    providers: [BookingService],
    controllers: [BookingController],
    exports: [BookingService],
  })
export class BookingModule {}
