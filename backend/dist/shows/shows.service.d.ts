import { ApiService } from 'src/api/api.service';
import { EpisodeOutput } from './dtos/episode.dto';
import { SeasonOutput } from './dtos/season.dto';
import { ShowOutput, ShowsOutput } from './dtos/shows.dto';
export declare class ShowsService {
    private readonly api;
    constructor(api: ApiService);
    topRated(): Promise<ShowsOutput>;
    popular(): Promise<ShowsOutput>;
    airingToday(): Promise<ShowsOutput>;
    showDetail(id: number): Promise<ShowOutput>;
    searchShow(query: string): Promise<ShowsOutput>;
    similarShows(id: number): Promise<ShowsOutput>;
    seasonDetail(showId: number, seasonNumber: number): Promise<SeasonOutput>;
    episodeDetail(showId: number, seasonNumber: number, episodeNumber: number): Promise<EpisodeOutput>;
}
