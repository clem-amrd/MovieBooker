import { IsNumber, IsDateString } from 'class-validator';

export class saveBookingDto {
    @IsNumber()
    movie: number;
  
    @IsDateString()
    schedule: Date;
  }