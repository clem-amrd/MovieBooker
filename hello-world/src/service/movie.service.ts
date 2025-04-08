import { HttpService } from '@nestjs/axios';
import { BadRequestException, Headers, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosResponse } from 'axios';
import { firstValueFrom, Observable } from 'rxjs';
import { Movie } from 'src/entity/movie.entity';

@Injectable()
export class MovieService {
    constructor(private readonly httpService: HttpService, private readonly configService: ConfigService) { }

    async findAll(query: string, page: number): Promise<AxiosResponse> {
        const API_KEY = this.configService.get<string>('API_KEY');
        const API_URL = this.configService.get<string>('API_URL');

        const response = await firstValueFrom(
            this.httpService.get(
              this.configService.get<string>('API_URL') +
                `3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`,
              {
                headers: {
                  accept: 'application/json',
                  Authorization:
                    'Bearer ' + this.configService.get<string>('API_KEY'),
                },
              },
            ),
          );
      
          return response.data;
        }

}