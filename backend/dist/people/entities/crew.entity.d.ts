import { CoreEntity } from 'src/common/entities/core.entity';
export declare class Crew extends CoreEntity {
    department?: string;
    original_language?: string;
    original_title?: string;
    job?: string;
    overview?: string;
    vote_count?: number;
    video?: boolean;
    poster_path?: string;
    backdrop_path?: string;
    title?: string;
    popularity?: number;
    genre_ids?: number[];
    vote_average?: number;
    adult?: boolean;
    release_date?: string;
    credit_id?: string;
}
