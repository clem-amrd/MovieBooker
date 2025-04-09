import { Controller, Get, UseGuards, Body, Headers } from '@nestjs/common';
import { JwtGuard } from '../jwt/jwt.guard';
import { BookingService } from 'src/service/booking.service';
import { BookingDto } from 'src/dto/booking.dto';

@Controller('booking')
export class BookingController {
    constructor(private readonly bookingService: BookingService) {  }

    @Get()
    @UseGuards(JwtGuard)
    bookMovie(@Body() booking: BookingDto, @Headers('authorization') token: string ){
        return this.bookingService.bookMovie(booking, token);
    }

}