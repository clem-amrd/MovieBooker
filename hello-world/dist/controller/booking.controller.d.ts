import { BookingService } from 'src/service/booking.service';
import { BookingDto } from 'src/dto/booking.dto';
export declare class BookingController {
    private readonly bookingService;
    constructor(bookingService: BookingService);
    bookMovie(booking: BookingDto, token: string): Promise<void>;
}
