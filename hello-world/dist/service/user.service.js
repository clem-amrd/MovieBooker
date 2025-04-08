"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("../entity/user.entity");
const bcrypt = require("bcrypt");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const jwt_1 = require("@nestjs/jwt");
let UserService = class UserService {
    repo;
    jwtService;
    constructor(repo, jwtService) {
        this.repo = repo;
        this.jwtService = jwtService;
    }
    async register(user) {
        if (this.repo.findOneBy({ username: user.username }) !== undefined) {
            throw new common_1.BadRequestException("Email is already used");
        }
        let hashedPassword = await bcrypt.hash(user.password, 10);
        user.password = hashedPassword;
        this.repo.save(user);
        return {
            access_token: await this.jwtService.signAsync({ email: user.email }),
        };
    }
    async login(user) {
        let email = user.email;
        let userDb = await this.repo.findOne({ where: { email } });
        if (!userDb) {
            throw new common_1.NotFoundException("No account with this email");
        }
        let isValid = await bcrypt.compare(user.password, userDb?.password);
        if (!isValid) {
            throw new common_1.UnauthorizedException("Wrong password");
        }
        return {
            access_token: await this.jwtService.signAsync({ email: user.email }),
        };
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService])
], UserService);
//# sourceMappingURL=user.service.js.map