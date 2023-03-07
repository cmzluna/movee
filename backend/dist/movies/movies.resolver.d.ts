import { IdInput, SearchInput } from 'src/common/dtos/common.dto';
import { MovieOutput, MoviesOutput } from './dtos/movies.dto';
import { MoviesService } from './movies.service';
export declare class MoviesResolver {
    private readonly movieService;
    constructor(movieService: MoviesService);
    nowPlayingMovies(): Promise<MoviesOutput>;
    upcomingMovies(): Promise<MoviesOutput>;
    popularMovies(): Promise<MoviesOutput>;
    movieDetail(movieDetailInput: IdInput): Promise<MovieOutput>;
    searchMovie(searchMovieInput: SearchInput): Promise<MoviesOutput>;
    similarMovies(similarMovieInput: IdInput): Promise<MoviesOutput>;
    findByGenres(genresIdsInput: SearchInput): Promise<MoviesOutput>;
}
