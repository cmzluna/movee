import { IdInput, SearchInput } from 'src/common/dtos/common.dto';
import { PeopleOutput, PersonOutput } from './dtos/people.dto';
import { PeopleService } from './people.service';
export declare class PeopleResolver {
    private readonly peopleService;
    constructor(peopleService: PeopleService);
    personDetail(personDetailInput: IdInput): Promise<PersonOutput>;
    searchPeople(searchPeopleInput: SearchInput): Promise<PeopleOutput>;
}
