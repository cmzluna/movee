import { CoreOutput } from 'src/common/dtos/output.dto';
import { Movie } from '../entities/movie.entity';
export declare class MoviesOutput extends CoreOutput {
    movies?: Movie[];
}
export declare class MovieOutput extends CoreOutput {
    movie?: Movie;
}
