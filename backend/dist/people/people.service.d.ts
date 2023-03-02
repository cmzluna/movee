import { ApiService } from 'src/api/api.service';
import { PeopleOutput, PersonOutput } from './dtos/people.dto';
export declare class PeopleService {
    private readonly api;
    constructor(api: ApiService);
    personDetail(id: number): Promise<PersonOutput>;
    searchPeople(query: string): Promise<PeopleOutput>;
}
