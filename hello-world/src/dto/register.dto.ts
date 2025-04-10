import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsFQDN, IsDate, Min, Max, IsString} from 'class-validator';

export class RegisterDto {

    @ApiProperty({ required: true, example: "usernameExample"})
    @IsString()
    username: string;

    @ApiProperty({ required: true, example: "example@gmail.com"})
    @IsEmail()
    email: string;
  
    @ApiProperty({ required: true, example: "example"})
    @IsString()
    password: string;
  }