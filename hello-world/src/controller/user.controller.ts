import { Controller, Get, Body } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { RegisterDto } from '../dto/register.dto';
import { LoginDto } from '../dto/login.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {  }

    @Get("/auth/register")
    register(@Body() user: RegisterDto): Promise<{ access_token: string }>{
        return this.userService.register(user);
    }

    @Get("/auth/login")
    login(@Body() user: LoginDto): Promise<{ access_token: string }> {
        return this.userService.login(user);
    }

}
