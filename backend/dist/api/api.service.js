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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiService = void 0;
const common_1 = require("@nestjs/common");
const common_constants_1 = require("../common/common.constants");
const errors_1 = require("../errors/errors");
const movie_entity_1 = require("../movies/entities/movie.entity");
const person_entity_1 = require("../people/entities/person.entity");
const episode_entity_1 = require("../shows/entities/episode.entity");
const season_entity_1 = require("../shows/entities/season.entity");
const show_entity_1 = require("../shows/entities/show.entity");
const api_endpoints_1 = require("./api.endpoints");
const api_logger_1 = require("./api.logger");
let ApiService = class ApiService {
    constructor(httpService) {
        this.httpService = httpService;
        this.movies = {
            nowPlaying: () => this.get(api_endpoints_1.endPoints.movies.nowPlaying),
            upcoming: () => this.get(api_endpoints_1.endPoints.movies.upcoming),
            popular: () => this.get(api_endpoints_1.endPoints.movies.popular),
            findById: (id) => this.get(api_endpoints_1.endPoints.movies.findById(id), {
                append_to_response: 'videos,credits',
            }),
            byGenres: (genresIds) => this.get(api_endpoints_1.endPoints.movies.genres(genresIds)),
            findSimilarById: (id) => this.get(api_endpoints_1.endPoints.movies.findSimilarById(id)),
        };
        this.shows = {
            topRated: () => this.get(api_endpoints_1.endPoints.shows.topRated),
            popular: () => this.get(api_endpoints_1.endPoints.shows.popular),
            airingToday: () => this.get(api_endpoints_1.endPoints.shows.airingToday),
            findById: (id) => this.get(api_endpoints_1.endPoints.shows.findById(id), {
                append_to_response: 'videos,credits',
            }),
            findSimilarById: (id) => this.get(api_endpoints_1.endPoints.shows.findSimilarById(id)),
            getSeasonDetail: (showId, seasonNumber) => this.get(api_endpoints_1.endPoints.shows.getSeasonDetail(showId, seasonNumber)),
            getEpisodeDetail: (showId, seasonNumber, episodeNumber) => this.get(api_endpoints_1.endPoints.shows.getEpisodeDetail(showId, seasonNumber, episodeNumber)),
        };
        this.people = {
            findById: (id) => this.get(api_endpoints_1.endPoints.people.findById(id)),
        };
        this.search = {
            movie: (query) => this.get(api_endpoints_1.endPoints.search.movie, { query }),
            show: (query) => this.get(api_endpoints_1.endPoints.search.show, { query }),
            person: (query) => this.get(api_endpoints_1.endPoints.search.person, { query }),
        };
    }
    async get(url, params) {
        try {
            const { data } = await this.httpService.get(url, { params }).toPromise();
            if (data.results) {
                return data.results;
            }
            else {
                return data;
            }
        }
        catch (e) {
            if (!e.response) {
                throw new Error(errors_1.errorMessage.noConnection);
            }
            const { config, status, statusText } = e.response;
            if (config) {
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
            }
            if (status === 401) {
                throw new Error(errors_1.errorMessage.invalidApiKey);
            }
            if (status === 404) {
                return undefined;
            }
            if (500 <= status) {
                throw new Error(errors_1.errorMessage.serverError(statusText));
            }
        }
    }
};
ApiService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [common_1.HttpService])
], ApiService);
exports.ApiService = ApiService;
//# sourceMappingURL=api.service.js.map