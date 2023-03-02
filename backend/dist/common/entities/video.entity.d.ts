import { CoreEntity } from './core.entity';
declare type Size = 360 | 480 | 720 | 1080;
declare type Type = 'Trailer' | 'Teaser' | 'Clip' | 'Featurette' | 'Behind the Scenes' | 'Bloopers';
export declare class Video extends CoreEntity {
    iso_639_1?: string;
    iso_3166_1?: string;
    key?: string;
    name?: string;
    site?: string;
    size?: Size;
    type?: Type;
}
export declare class VideoResults {
    results: Video[];
}
export {};
