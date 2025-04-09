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
exports.BookingService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const jwt_1 = require("@nestjs/jwt");
const booking_entity_1 = require("../entity/booking.entity");
let BookingService = class BookingService {
    repo;
    jwtService;
    constructor(repo, jwtService) {
        this.repo = repo;
        this.jwtService = jwtService;
    }
    async bookMovie(booking, token) {
        let userId = this.jwtService.decode(token);
        let date = new Date(booking.schedule);
        let beginDate = new Date(date.getTime() - 2 * 60 * 60 * 1000);
        let endDate = new Date(date.getTime() + 2 * 60 * 60 * 1000);
        const bookingInDb = await this.repo.findOne({
            where: {
                user_id: userId,
                schedule: (0, typeorm_2.Between)(beginDate, endDate)
            },
        });
        console.log(bookingInDb);
        if (bookingInDb) {
            throw new common_1.BadRequestException("A movie is already booked during this schedule");
        }
        this.repo.save(booking);
    }
};
exports.BookingService = BookingService;
exports.BookingService = BookingService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(booking_entity_1.Booking)),
    __metadata("design:paramtypes", [typeorm_2.Repository, jwt_1.JwtService])
], BookingService);
//# sourceMappingURL=booking.service.js.map