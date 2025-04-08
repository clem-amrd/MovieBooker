import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../jwt/jwt.guard';
import { MovieService } from 'src/service/movie.service';

@Controller('movies')
export class MovieController {
    constructor(private readonly movieService: MovieService) {  }

    @Get(":query/:page")
    @UseGuards(JwtGuard)
    test(@Param('query') query: string, @Param('page') page: number,){
        return this.movieService.findAll(query, page);
    }

}
