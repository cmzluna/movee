import { CoreEntity } from 'src/common/entities/core.entity';
import { Cast } from './cast.entity';
import { Crew } from './crew.entity';
export declare class Credits extends CoreEntity {
    cast: Cast[];
    crew: Crew[];
}
