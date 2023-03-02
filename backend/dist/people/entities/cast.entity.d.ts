import { CoreEntity } from 'src/common/entities/core.entity';
export declare class Cast extends CoreEntity {
    character?: string;
    credit_id?: string;
    release_date?: string;
    vote_count?: number;
    video?: boolean;
    adult?: boolean;
    vote_average?: number;
    title?: string;
    genre_ids?: number[];
    original_language?: string;
    original_title?: string;
    popularity?: number;
    backdrop_path?: string;
    overview?: string;
    poster_path?: string;
}
