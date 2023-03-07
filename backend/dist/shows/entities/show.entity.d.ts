import { Company, Country, Genre, Language } from 'src/common/entities/common.entity';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Person } from 'src/people/entities/person.entity';
import { Episode } from './episode.entity';
import { Network } from './network.entity';
import { Season } from './season.entity';
declare const Creator_base: import("@nestjs/common").Type<Pick<Person, "name" | "id" | "gender" | "profile_path">>;
declare class Creator extends Creator_base {
    credir_id?: string;
}
declare const LastEpisode_base: import("@nestjs/common").Type<Pick<Episode, "name" | "id" | "vote_count" | "vote_average" | "overview" | "air_date" | "episode_number" | "production_code" | "season_number" | "still_path">>;
declare class LastEpisode extends LastEpisode_base {
}
export declare class Show extends CoreEntity {
    backdrop_path?: string;
    created_by: Creator[];
    episode_run_time: number[];
    first_air_date?: string;
    genres: Genre[];
    homepage?: string;
    in_production?: boolean;
    languages: Language[];
    last_air_date?: string;
    last_episode_to_air?: LastEpisode;
    name?: string;
    networks: Network[];
    number_of_episodes?: number;
    number_of_seasons?: number;
    origin_country: string[];
    original_language?: string;
    original_name?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string;
    production_companies: Company[];
    production_countries: Country[];
    seasons: Season[];
    spoken_languages: Language[];
    status?: string;
    tagline?: string;
    type?: string;
    vote_average?: number;
    vote_count?: number;
}
export {};
