import { CoreOutput } from 'src/common/dtos/output.dto';
import { Person } from '../entities/person.entity';
export declare class PeopleOutput extends CoreOutput {
    people?: Person[];
}
export declare class PersonOutput extends CoreOutput {
    person?: Person;
}
