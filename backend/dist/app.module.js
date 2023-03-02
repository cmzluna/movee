"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const Joi = require("joi");
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const movies_module_1 = require("./movies/movies.module");
const shows_module_1 = require("./shows/shows.module");
const people_module_1 = require("./people/people.module");
const common_module_1 = require("./common/common.module");
const graphql_1 = require("@nestjs/graphql");
const config_1 = require("@nestjs/config");
const api_module_1 = require("./api/api.module");
const iso_1 = require("./utils/iso");
const serve_static_1 = require("@nestjs/serve-static");
const path = require("path");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
                validationSchema: Joi.object({
                    TMDB_API_KEY: Joi.string().required(),
                    LANGUAGE: Joi.string()
                        .valid(...iso_1.ISO639)
                        .required(),
                    REGION: Joi.string()
                        .valid(...iso_1.ISO3166)
                        .required(),
                }),
            }),
            graphql_1.GraphQLModule.forRoot({
                autoSchemaFile: true,
                playground: true,
                introspection: true,
            }),
            api_module_1.ApiModule.forRoot({
                apiKey: process.env.TMDB_API_KEY,
                language: process.env.LANGUAGE,
                region: process.env.REGION,
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: path.join(__dirname, '..', 'public'),
            }),
            movies_module_1.MoviesModule,
            shows_module_1.ShowsModule,
            people_module_1.PeopleModule,
            common_module_1.CommonModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map