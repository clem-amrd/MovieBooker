import { Controller, Get, UseGuards, Body, Headers, Post, Delete, Param } from '@nestjs/common';
import { JwtGuard } from '../jwt/jwt.guard';
import { BookingService } from 'src/service/booking.service';
import { BookingDto } from 'src/dto/booking.dto';
import { saveBookingDto } from 'src/dto/saveBooking.dto';

@Controller('booking')
export class BookingController {
    constructor(private readonly bookingService: BookingService) {  }

    @Post()
    @UseGuards(JwtGuard)
    bookMovie(@Body() booking: saveBookingDto, @Headers('Authorization') token: string ){
        return this.bookingService.saveBooking(booking, token);
    }

    @Get()
    @UseGuards(JwtGuard)
    getBookings(@Headers('Authorization') token: string ){
        return this.bookingService.getBookings(token);
    }

    @Delete(":id")
    @UseGuards(JwtGuard)
    deleteBooking(@Param('id') id: number, @Headers('Authorization') token: string ){
        return this.bookingService.deleteBooking(id, token);
    }

}