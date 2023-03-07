import { CoreEntity } from 'src/common/entities/core.entity';
export declare class Person extends CoreEntity {
    birthday?: string;
    known_for_department?: string;
    deathday?: string;
    name?: string;
    also_knwon_as?: string;
    gender?: number;
    biography?: string;
    place_of_birth?: string;
    profile_path?: string;
    adult?: boolean;
    imdb_id?: string;
    homepage?: string;
}
