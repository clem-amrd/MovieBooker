import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsFQDN, IsDate, Min, Max, IsString} from 'class-validator';

export class RegisterDto {

    @ApiProperty({ required: true})
    @IsString()
    username: string;

    @ApiProperty({ required: true})
    @IsEmail()
    email: string;
  
    @ApiProperty({ required: true})
    @IsString()
    password: string;
  }