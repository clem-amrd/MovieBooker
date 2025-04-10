import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { Booking } from 'src/entity/booking.entity';
import { saveBookingDto } from 'src/dto/saveBooking.dto';

@Injectable()
export class BookingService {

  constructor(
    @InjectRepository(Booking)
    private readonly repo: Repository<Booking>, private jwtService: JwtService) { }

  async saveBooking(booking: saveBookingDto, auth: string) {
    let token = auth.split(" ")[1];
    let user = this.jwtService.decode(token);
    console.log(user);
    let date = new Date(booking.schedule);
    let beginDate = new Date(date.getTime() - 2 * 60 * 60 * 1000);
    let endDate = new Date(date.getTime() + 2 * 60 * 60 * 1000);
    const bookingInDb = await this.repo.findOne({
        where: {
            user_id: user.id,
            schedule: Between(beginDate, endDate)
        }
      });
    if (bookingInDb) {
      throw new UnauthorizedException("A movie is already booked during this schedule")
    }
    const newBooking = this.repo.create({
        movie: booking.movie,
        schedule: booking.schedule,
        user_id: user.id
    })
    this.repo.save(newBooking);
  }

  async getBookings(auth: string) {
    let token = auth.split(" ")[1];
    let user = this.jwtService.decode(token);
    const bookingsArray = await this.repo.find({
        where: {
            user_id: user.id
        },
        relations: ['user_id'],
      });
    if (!bookingsArray) {
      throw new NotFoundException("User not find")
    }
    if(bookingsArray.length == 0){
        return "No booking for this user";
    }else{
        return bookingsArray;
    }
  }

  async deleteBooking(bookingId: number, auth: string) {
    let token = auth.split(" ")[1];
    let user = this.jwtService.decode(token);
    const bookingInDb = await this.repo.findOne({
        where: {
            id: bookingId,
            user_id: user.id
        },
        relations: ['user_id'],
      });
      console.log(bookingInDb);
    if(!bookingInDb){
        throw new NotFoundException("This booking does not exist");
    }
    this.repo.delete(bookingInDb);
  }
}