import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class LoginDto {

    @ApiProperty({ required: true})
    @IsString()
    email: string;
  
    @ApiProperty({ required: true})
    @IsString()
    password: string;
  }