import { UserService } from '../service/user.service';
import { RegisterDto } from '../dto/register.dto';
import { LoginDto } from '../dto/login.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    register(user: RegisterDto): Promise<{
        access_token: string;
    }>;
    login(user: LoginDto): Promise<{
        access_token: string;
    }>;
}
