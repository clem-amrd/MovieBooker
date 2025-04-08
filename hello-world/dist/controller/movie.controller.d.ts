import { MovieService } from 'src/service/movie.service';
export declare class MovieController {
    private readonly movieService;
    constructor(movieService: MovieService);
    test(query: string, page: number): Promise<import("axios").AxiosResponse<any, any>>;
}
