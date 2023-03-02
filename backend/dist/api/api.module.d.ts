import { DynamicModule, HttpService, OnModuleInit } from '@nestjs/common';
import { ApiModuleOptions } from './api.interface';
export declare class ApiModule implements OnModuleInit {
    private readonly httpService;
    constructor(httpService: HttpService);
    static forRoot(options: ApiModuleOptions): DynamicModule;
    onModuleInit(): void;
}
