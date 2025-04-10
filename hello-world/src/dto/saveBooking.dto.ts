import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsDateString } from 'class-validator';

export class saveBookingDto {

    @ApiProperty({ required: true})
    @IsNumber()
    movie: number;
  
    @ApiProperty({ required: true})
    @IsDateString()
    schedule: Date;
  }