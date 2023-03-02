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
exports.MoviesService = void 0;
const common_1 = require("@nestjs/common");
const api_service_1 = require("../api/api.service");
const errors_1 = require("../errors/errors");
let MoviesService = class MoviesService {
    constructor(api) {
        this.api = api;
    }
    async nowPlaying() {
        try {
            const movies = await this.api.movies.nowPlaying();
            return { ok: true, movies };
        }
        catch (error) {
            return { ok: false, error };
        }
    }
    async upcoming() {
        try {
            const movies = await this.api.movies.upcoming();
            return { ok: true, movies };
        }
        catch (error) {
            return { ok: false, error };
        }
    }
    async popular() {
        try {
            const movies = await this.api.movies.popular();
            return { ok: true, movies };
        }
        catch (error) {
            return { ok: false, error };
        }
    }
    async movieDetail(id) {
        try {
            const movie = await this.api.movies.findById(id);
            if (!movie) {
                return { ok: false, error: errors_1.errorMessage.movieNotFound };
            }
            return { ok: true, movie };
        }
        catch (error) {
            return { ok: false, error };
        }
    }
    async searchMovie(query) {
        try {
            const movies = await this.api.search.movie(query);
            return { ok: true, movies };
        }
        catch (error) {
            return { ok: false, error };
        }
    }
    async similarMovies(id) {
        try {
            const movies = await this.api.movies.findSimilarById(id);
            if (!movies) {
                return { ok: false, error: errors_1.errorMessage.movieNotFound };
            }
            return { ok: true, movies };
        }
        catch (error) {
            return { ok: false, error };
        }
    }
    async byGenres(genresIds) {
        try {
            const movies = await this.api.movies.byGenres(genresIds);
            if (!movies) {
                return { ok: false, error: errors_1.errorMessage.movieNotFound };
            }
            return { ok: true, movies };
        }
        catch (error) {
            return { ok: false, error };
        }
    }
};
MoviesService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [api_service_1.ApiService])
], MoviesService);
exports.MoviesService = MoviesService;
//# sourceMappingURL=movies.service.js.map