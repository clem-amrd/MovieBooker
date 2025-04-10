import { Controller, Get, Body, Post } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { RegisterDto } from '../dto/register.dto';
import { LoginDto } from '../dto/login.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {  }
    /**
    * Create an account and should return the access token
    */
    @Post("/auth/register")
    register(@Body() user: RegisterDto): Promise<{ access_token: string }>{
        return this.userService.register(user);
    }
    /**
    * Login the user and should return the access token
    */
    @Post("/auth/login")
    login(@Body() user: LoginDto): Promise<{ access_token: string }> {
        return this.userService.login(user);
    }

}
