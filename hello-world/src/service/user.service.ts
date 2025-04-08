import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { RegisterDto } from '../dto/register.dto';
import { LoginDto } from '../dto/login.dto';
import { User } from "../entity/user.entity";
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private readonly repo: Repository<User>,
    private jwtService: JwtService
  ) { }

  async register(user: RegisterDto): Promise<{ access_token: string }> {
    if (this.repo.findOneBy({ username: user.username }) !== undefined) {
      throw new BadRequestException("Email is already used")
    }
    let hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
    this.repo.save(user);
    return {
      access_token: await this.jwtService.signAsync({ email: user.email }),
    };
  }

  async login(user: LoginDto): Promise<{ access_token: string }> {
    let email = user.email;
    let userDb = await this.repo.findOne({ where: { email } });
    if (!userDb) {
      throw new NotFoundException("No account with this email");
    }
    let isValid = await bcrypt.compare(user.password, userDb?.password);
    if (!isValid) {
      throw new UnauthorizedException("Wrong password");
    }
    return {
      access_token: await this.jwtService.signAsync({ email: user.email }),
    };
  }

}
