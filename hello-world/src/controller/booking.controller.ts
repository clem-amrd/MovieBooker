import { Controller, Get, UseGuards, Body, Headers, Post, Delete, Param } from '@nestjs/common';
import { JwtGuard } from '../jwt/jwt.guard';
import { BookingService } from 'src/service/booking.service';
import { saveBookingDto } from 'src/dto/saveBooking.dto';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';

@Controller('booking')
export class BookingController {
    constructor(private readonly bookingService: BookingService) { }

    @Post()
    @UseGuards(JwtGuard)
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Create a reservation' })
    bookMovie(@Body() booking: saveBookingDto, @Headers('Authorization') token: string) {
        return this.bookingService.saveBooking(booking, token);
    }

    @Get()
    @UseGuards(JwtGuard)
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Get all the reservations of the current user' })
    getBookings(@Headers('Authorization') token: string) {
        return this.bookingService.getBookings(token);
    }

    @Delete(":id")
    @UseGuards(JwtGuard)
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Delete one of a current user\'s reservation' })
    deleteBooking(@Param('id') id: number, @Headers('Authorization') token: string) {
        return this.bookingService.deleteBooking(id, token);
    }

}