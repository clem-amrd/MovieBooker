import { IsNumber, IsString, IsDateString } from 'class-validator';

export class BookingDto {
    @IsNumber()
    movie: number;
  
    @IsDateString()
    schedule: Date;

    @IsNumber()
    user_id: number;
  }