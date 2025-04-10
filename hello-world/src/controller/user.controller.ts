import { Controller, Get, Body, Post } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { RegisterDto } from '../dto/register.dto';
import { LoginDto } from '../dto/login.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {  }

    @Post("/auth/register")
    @ApiOperation({ summary: 'Create an account and should return the access token' })
    register(@Body() user: RegisterDto): Promise<{ access_token: string }>{
        return this.userService.register(user);
    }

    @Post("/auth/login")
    @ApiOperation({ summary: 'Login the user and should return the access token' })
    login(@Body() user: LoginDto): Promise<{ access_token: string }> {
        return this.userService.login(user);
    }

}
