import { ApiService } from 'src/api/api.service';
import { MovieOutput, MoviesOutput } from './dtos/movies.dto';
export declare class MoviesService {
    private readonly api;
    constructor(api: ApiService);
    nowPlaying(): Promise<MoviesOutput>;
    upcoming(): Promise<MoviesOutput>;
    popular(): Promise<MoviesOutput>;
    movieDetail(id: number): Promise<MovieOutput>;
    searchMovie(query: string): Promise<MoviesOutput>;
    similarMovies(id: number): Promise<MoviesOutput>;
    byGenres(genresIds: string): Promise<MoviesOutput>;
}
