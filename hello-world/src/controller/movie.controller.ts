import { Controller, Get, Body, UseGuards } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { JwtGuard } from '../jwt/jwt.guard';

@Controller('movie')
export class UserController {
    constructor(private readonly userService: UserService) {  }

    @Get()
    @UseGuards(JwtGuard)
    test(){
        return "test";
    }

}
