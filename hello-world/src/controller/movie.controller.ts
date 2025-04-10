import { Controller, Get, Headers, Param, Query, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../jwt/jwt.guard';
import { MovieService } from 'src/service/movie.service';
import { ApiBearerAuth, ApiOperation, ApiQuery } from '@nestjs/swagger';

@Controller('movies')
export class MovieController {
    constructor(private readonly movieService: MovieService) {  }

    @Get()
    @UseGuards(JwtGuard)
    @ApiBearerAuth()
    @ApiQuery({ name: 'query', required: false, description: 'Search query for filtering movies', type: String })
    @ApiOperation({ summary: 'Get all the movie (with no query param), or search a movie' })
    findAll(@Query('page') page?: number, @Query('query') query?: string){
        return this.movieService.findAll(query ?? '', page ?? 1);
    }

}
