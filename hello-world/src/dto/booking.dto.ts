import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsDateString } from 'class-validator';

export class BookingDto {
  @ApiProperty({ required: true })
  @IsNumber()
  movie: number;

  /**
 * @example "2025-11-16T14:00:00+02:00"
 */
  @ApiProperty({ required: true, example: "2025-11-16T14:00:00+02:00" })
  @IsDateString()
  schedule: Date;

  @ApiProperty({ required: true })
  @IsNumber()
  user_id: number;
}