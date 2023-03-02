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
exports.ShowsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_dto_1 = require("../common/dtos/common.dto");
const episode_detail_dto_1 = require("./dtos/episode-detail.dto");
const episode_dto_1 = require("./dtos/episode.dto");
const season_detail_dto_1 = require("./dtos/season-detail.dto");
const season_dto_1 = require("./dtos/season.dto");
const shows_dto_1 = require("./dtos/shows.dto");
const show_entity_1 = require("./entities/show.entity");
const shows_service_1 = require("./shows.service");
let ShowsResolver = class ShowsResolver {
    constructor(showsService) {
        this.showsService = showsService;
    }
    topRatedShows() {
        return this.showsService.topRated();
    }
    popularShows() {
        return this.showsService.popular();
    }
    airingTodayShows() {
        return this.showsService.airingToday();
    }
    showDetail(showDetailInput) {
        return this.showsService.showDetail(showDetailInput.id);
    }
    searchShow(searchShowInput) {
        return this.showsService.searchShow(searchShowInput.query);
    }
    similarShows(similarShowsInput) {
        return this.showsService.similarShows(similarShowsInput.id);
    }
    seasonDetail(seasonDetailInput) {
        return this.showsService.seasonDetail(seasonDetailInput.showId, seasonDetailInput.seasonNumber);
    }
    episodeDetail(episodeDetailInput) {
        return this.showsService.episodeDetail(episodeDetailInput.showId, episodeDetailInput.seasonNumber, episodeDetailInput.episodeNumber);
    }
};
__decorate([
    graphql_1.Query((returns) => shows_dto_1.ShowsOutput),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ShowsResolver.prototype, "topRatedShows", null);
__decorate([
    graphql_1.Query((returns) => shows_dto_1.ShowsOutput),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ShowsResolver.prototype, "popularShows", null);
__decorate([
    graphql_1.Query((returns) => shows_dto_1.ShowsOutput),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ShowsResolver.prototype, "airingTodayShows", null);
__decorate([
    graphql_1.Query((returns) => shows_dto_1.ShowOutput),
    __param(0, graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [common_dto_1.IdInput]),
    __metadata("design:returntype", Promise)
], ShowsResolver.prototype, "showDetail", null);
__decorate([
    graphql_1.Query((returns) => shows_dto_1.ShowsOutput),
    __param(0, graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [common_dto_1.SearchInput]),
    __metadata("design:returntype", Promise)
], ShowsResolver.prototype, "searchShow", null);
__decorate([
    graphql_1.Query((returns) => shows_dto_1.ShowsOutput),
    __param(0, graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [common_dto_1.IdInput]),
    __metadata("design:returntype", Promise)
], ShowsResolver.prototype, "similarShows", null);
__decorate([
    graphql_1.Query((returns) => season_dto_1.SeasonOutput),
    __param(0, graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [season_detail_dto_1.SeasonDetailInput]),
    __metadata("design:returntype", Promise)
], ShowsResolver.prototype, "seasonDetail", null);
__decorate([
    graphql_1.Query((returns) => episode_dto_1.EpisodeOutput),
    __param(0, graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [episode_detail_dto_1.EpisodeDetailInput]),
    __metadata("design:returntype", Promise)
], ShowsResolver.prototype, "episodeDetail", null);
ShowsResolver = __decorate([
    graphql_1.Resolver((of) => show_entity_1.Show),
    __metadata("design:paramtypes", [shows_service_1.ShowsService])
], ShowsResolver);
exports.ShowsResolver = ShowsResolver;
//# sourceMappingURL=shows.resolver.js.map