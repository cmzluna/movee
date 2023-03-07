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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoviesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_dto_1 = require("../common/dtos/common.dto");
const movies_dto_1 = require("./dtos/movies.dto");
const movie_entity_1 = require("./entities/movie.entity");
const movies_service_1 = require("./movies.service");
let MoviesResolver = class MoviesResolver {
    constructor(movieService) {
        this.movieService = movieService;
    }
    nowPlayingMovies() {
        return this.movieService.nowPlaying();
    }
    upcomingMovies() {
        return this.movieService.upcoming();
    }
    popularMovies() {
        return this.movieService.popular();
    }
    movieDetail(movieDetailInput) {
        return this.movieService.movieDetail(movieDetailInput.id);
    }
    searchMovie(searchMovieInput) {
        return this.movieService.searchMovie(searchMovieInput.query);
    }
    similarMovies(similarMovieInput) {
        return this.movieService.similarMovies(similarMovieInput.id);
    }
    findByGenres(genresIdsInput) {
        return this.movieService.byGenres(genresIdsInput.query);
    }
};
__decorate([
    graphql_1.Query((returns) => movies_dto_1.MoviesOutput),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MoviesResolver.prototype, "nowPlayingMovies", null);
__decorate([
    graphql_1.Query((returns) => movies_dto_1.MoviesOutput),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MoviesResolver.prototype, "upcomingMovies", null);
__decorate([
    graphql_1.Query((returns) => movies_dto_1.MoviesOutput),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MoviesResolver.prototype, "popularMovies", null);
__decorate([
    graphql_1.Query((returns) => movies_dto_1.MovieOutput),
    __param(0, graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [common_dto_1.IdInput]),
    __metadata("design:returntype", Promise)
], MoviesResolver.prototype, "movieDetail", null);
__decorate([
    graphql_1.Query((returns) => movies_dto_1.MoviesOutput),
    __param(0, graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [common_dto_1.SearchInput]),
    __metadata("design:returntype", Promise)
], MoviesResolver.prototype, "searchMovie", null);
__decorate([
    graphql_1.Query((returns) => movies_dto_1.MoviesOutput),
    __param(0, graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [common_dto_1.IdInput]),
    __metadata("design:returntype", Promise)
], MoviesResolver.prototype, "similarMovies", null);
__decorate([
    graphql_1.Query((returns) => movies_dto_1.MoviesOutput),
    __param(0, graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [common_dto_1.SearchInput]),
    __metadata("design:returntype", Promise)
], MoviesResolver.prototype, "findByGenres", null);
MoviesResolver = __decorate([
    graphql_1.Resolver((of) => movie_entity_1.Movie),
    __metadata("design:paramtypes", [movies_service_1.MoviesService])
], MoviesResolver);
exports.MoviesResolver = MoviesResolver;
//# sourceMappingURL=movies.resolver.js.map