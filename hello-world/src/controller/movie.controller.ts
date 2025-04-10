import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../jwt/jwt.guard';
import { MovieService } from 'src/service/movie.service';

@Controller('movies')
export class MovieController {
    constructor(private readonly movieService: MovieService) {  }
    /**
    * Get all the movie (with no query param), or search a movie
    */
    @Get()
    @UseGuards(JwtGuard)
    findAll(@Query('page') page?: number, @Query('query') query?: string){
        return this.movieService.findAll(query ?? '', page ?? 1);
    }

}
