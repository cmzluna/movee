import { CoreEntity } from './core.entity';
export declare class Genre extends CoreEntity {
    name: string;
}
export declare class Country {
    iso_3166_1: string;
    name: string;
}
export declare class Language {
    iso_639_1: string;
    name: string;
}
export declare class Company extends CoreEntity {
    name: string;
    logo_path?: string;
    origin_country?: string;
}
