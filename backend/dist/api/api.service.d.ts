import { HttpService } from '@nestjs/common';
import { Movie } from 'src/movies/entities/movie.entity';
import { Person } from 'src/people/entities/person.entity';
import { Episode } from 'src/shows/entities/episode.entity';
import { Season } from 'src/shows/entities/season.entity';
import { Show } from 'src/shows/entities/show.entity';
export declare class ApiService {
    private readonly httpService;
    constructor(httpService: HttpService);
    private get;
    movies: {
        nowPlaying: () => Promise<Movie[]>;
        upcoming: () => Promise<Movie[]>;
        popular: () => Promise<Movie[]>;
        findById: (id: number) => Promise<Movie>;
        byGenres: (genresIds: string) => Promise<Movie[]>;
        findSimilarById: (id: number) => Promise<Movie[]>;
    };
    shows: {
        topRated: () => Promise<Show[]>;
        popular: () => Promise<Show[]>;
        airingToday: () => Promise<Show[]>;
        findById: (id: number) => Promise<Show>;
        findSimilarById: (id: number) => Promise<Show[]>;
        getSeasonDetail: (showId: number, seasonNumber: number) => Promise<Season>;
        getEpisodeDetail: (showId: number, seasonNumber: number, episodeNumber: number) => Promise<Episode>;
    };
    people: {
        findById: (id: number) => Promise<Person>;
    };
    search: {
        movie: (query: string) => Promise<Movie[]>;
        show: (query: string) => Promise<Show[]>;
        person: (query: string) => Promise<Person[]>;
    };
}
