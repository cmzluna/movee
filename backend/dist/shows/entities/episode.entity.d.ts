import { CoreEntity } from 'src/common/entities/core.entity';
import { Crew } from 'src/people/entities/crew.entity';
import { Person } from 'src/people/entities/person.entity';
declare const GuestStar_base: import("@nestjs/common").Type<Pick<Person, "name" | "id" | "profile_path">>;
declare class GuestStar extends GuestStar_base {
    credit_id?: string;
    character?: string;
    order?: number;
}
export declare class Episode extends CoreEntity {
    air_date?: string;
    crew: Crew[];
    episode_number?: number;
    guest_stars: GuestStar[];
    name?: string;
    overview?: string;
    production_code?: string;
    season_number?: number;
    still_path?: string;
    vote_average?: number;
    vote_count?: number;
}
export {};
