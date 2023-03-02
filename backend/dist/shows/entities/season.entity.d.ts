import { CoreEntity } from 'src/common/entities/core.entity';
import { Episode } from './episode.entity';
export declare class Season extends CoreEntity {
    air_date?: string;
    episodes?: Episode[];
    name?: string;
    overview?: string;
    poster_path?: string;
    season_number?: number;
}
