import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { Booking } from 'src/entity/booking.entity';
import { BookingDto } from 'src/dto/booking.dto';

@Injectable()
export class BookingService {

  constructor(
    @InjectRepository(Booking)
    private readonly repo: Repository<Booking>, private jwtService: JwtService) { }

  async bookMovie(booking: BookingDto, token: string) {
    let userId = this.jwtService.decode(token)
    let date = new Date(booking.schedule);
    let beginDate = new Date(date.getTime() - 2 * 60 * 60 * 1000);
    let endDate = new Date(date.getTime() + 2 * 60 * 60 * 1000);
    const bookingInDb = await this.repo.findOne({
        where: {
            user_id: userId,
            schedule: Between(beginDate, endDate)
        },
      });
    console.log(bookingInDb);
    if (bookingInDb) {
      throw new BadRequestException("A movie is already booked during this schedule")
    }
    this.repo.save(booking);
  }
}