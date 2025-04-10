import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsDateString } from 'class-validator';

export class saveBookingDto {

    @ApiProperty({ required: true, example: 973038})
    @IsNumber()
    movie: number;
  
    @ApiProperty({ required: true, example: "2025-11-16T14:00:00+02:00"})
    @IsDateString()
    schedule: Date;
  }