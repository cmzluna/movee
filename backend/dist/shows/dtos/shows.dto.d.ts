import { CoreOutput } from 'src/common/dtos/output.dto';
import { Show } from '../entities/show.entity';
export declare class ShowsOutput extends CoreOutput {
    shows?: Show[];
}
export declare class ShowOutput extends CoreOutput {
    show?: Show;
}
