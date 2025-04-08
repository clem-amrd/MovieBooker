import { RegisterDto } from '../dto/register.dto';
import { LoginDto } from '../dto/login.dto';
import { User } from "../entity/user.entity";
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
export declare class UserService {
    private readonly repo;
    private jwtService;
    constructor(repo: Repository<User>, jwtService: JwtService);
    register(user: RegisterDto): Promise<{
        access_token: string;
    }>;
    login(user: LoginDto): Promise<{
        access_token: string;
    }>;
}
