import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class LoginDto {

    @ApiProperty({ required: true, example: "example@gmail.com"})
    @IsString()
    email: string;
  
    @ApiProperty({ required: true, example: "example"})
    @IsString()
    password: string;
  }