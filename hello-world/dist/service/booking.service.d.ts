import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { Booking } from 'src/entity/booking.entity';
import { BookingDto } from 'src/dto/booking.dto';
export declare class BookingService {
    private readonly repo;
    private jwtService;
    constructor(repo: Repository<Booking>, jwtService: JwtService);
    bookMovie(booking: BookingDto, token: string): Promise<void>;
}
