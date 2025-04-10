import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../jwt/jwt.guard';
import { MovieService } from 'src/service/movie.service';

@Controller('movies')
export class MovieController {
    constructor(private readonly movieService: MovieService) {  }

    @Get()
    @UseGuards(JwtGuard)
    findAll(@Query('page') page?: number, @Query('query') query?: string){
        console.log("test");
        return this.movieService.findAll(query ?? '', page ?? 1);
    }

}
