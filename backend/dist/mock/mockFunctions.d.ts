/// <reference types="jest" />
import { HttpService } from '@nestjs/common';
import { ApiService } from 'src/api/api.service';
export declare type MockApiService = {
    movies: MockApiMovies;
    shows: MockApiShows;
    people: MockApiPeople;
    search: MockApiSearch;
};
declare type MockApiMovies = Partial<Record<keyof ApiService['movies'], jest.Mock>>;
declare type MockApiShows = Partial<Record<keyof ApiService['shows'], jest.Mock>>;
declare type MockApiPeople = Partial<Record<keyof ApiService['people'], jest.Mock>>;
declare type MockApiSearch = Partial<Record<keyof ApiService['search'], jest.Mock>>;
export declare const mockApiFunctions: MockApiService;
export declare type MockHttpService = Partial<Record<keyof HttpService, jest.Mock>>;
export declare const mockHttpServiceFunctions: {
    get: jest.Mock<any, any>;
};
export {};
