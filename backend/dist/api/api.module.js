"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ApiModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiModule = void 0;
const common_1 = require("@nestjs/common");
const common_constants_1 = require("../common/common.constants");
const api_logger_1 = require("./api.logger");
const api_service_1 = require("./api.service");
let ApiModule = ApiModule_1 = class ApiModule {
    constructor(httpService) {
        this.httpService = httpService;
    }
    static forRoot(options) {
        return {
            module: ApiModule_1,
            imports: [
                common_1.HttpModule.register({
                    baseURL: common_constants_1.TMDB_API_DOMATIN,
                    params: {
                        api_key: options.apiKey,
                        language: options.language,
                        region: options.region,
                    },
                }),
            ],
            providers: [api_service_1.ApiService],
            exports: [api_service_1.ApiService],
        };
    }
    onModuleInit() {
        this.httpService.axiosRef.interceptors.request.use((config) => {
            config.headers[common_constants_1.START_TIME_CONFIG] = process.hrtime();
            return config;
        });
        this.httpService.axiosRef.interceptors.response.use((response) => {
            const { config, status, statusText } = response;
            const { method, url, headers } = config;
            const startTime = headers[common_constants_1.START_TIME_CONFIG];
            api_logger_1.httpLog({
                service: 'HTTP Service',
                method,
                url,
                startTime,
                status,
                statusText,
            });
            return response;
        });
    }
};
ApiModule = ApiModule_1 = __decorate([
    common_1.Module({}),
    common_1.Global(),
    __metadata("design:paramtypes", [common_1.HttpService])
], ApiModule);
exports.ApiModule = ApiModule;
//# sourceMappingURL=api.module.js.map