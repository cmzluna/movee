import { IdInput, SearchInput } from 'src/common/dtos/common.dto';
import { EpisodeDetailInput } from './dtos/episode-detail.dto';
import { EpisodeOutput } from './dtos/episode.dto';
import { SeasonDetailInput } from './dtos/season-detail.dto';
import { SeasonOutput } from './dtos/season.dto';
import { ShowOutput, ShowsOutput } from './dtos/shows.dto';
import { ShowsService } from './shows.service';
export declare class ShowsResolver {
    private readonly showsService;
    constructor(showsService: ShowsService);
    topRatedShows(): Promise<ShowsOutput>;
    popularShows(): Promise<ShowsOutput>;
    airingTodayShows(): Promise<ShowsOutput>;
    showDetail(showDetailInput: IdInput): Promise<ShowOutput>;
    searchShow(searchShowInput: SearchInput): Promise<ShowsOutput>;
    similarShows(similarShowsInput: IdInput): Promise<ShowsOutput>;
    seasonDetail(seasonDetailInput: SeasonDetailInput): Promise<SeasonOutput>;
    episodeDetail(episodeDetailInput: EpisodeDetailInput): Promise<EpisodeOutput>;
}
