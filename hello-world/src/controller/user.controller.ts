import { Controller, Get, Body, Post } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { RegisterDto } from '../dto/register.dto';
import { LoginDto } from '../dto/login.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {  }

    @Post("/auth/register")
    register(@Body() user: RegisterDto): Promise<{ access_token: string }>{
        return this.userService.register(user);
    }

    @Post("/auth/login")
    login(@Body() user: LoginDto): Promise<{ access_token: string }> {
        return this.userService.login(user);
    }

}
