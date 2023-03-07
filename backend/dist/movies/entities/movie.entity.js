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
exports.Movie = void 0;
const graphql_1 = require("@nestjs/graphql");
const core_entity_1 = require("../../common/entities/core.entity");
const common_entity_1 = require("../../common/entities/common.entity");
const video_entity_1 = require("../../common/entities/video.entity");
const credits_entity_1 = require("../../people/entities/credits.entity");
let Movie = class Movie extends core_entity_1.CoreEntity {
};
__decorate([
    graphql_1.Field((type) => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], Movie.prototype, "adult", void 0);
__decorate([
    graphql_1.Field((type) => String, { nullable: true }),
    __metadata("design:type", String)
], Movie.prototype, "backdrop_path", void 0);
__decorate([
    graphql_1.Field((type) => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], Movie.prototype, "budget", void 0);
__decorate([
    graphql_1.Field((type) => credits_entity_1.Credits),
    __metadata("design:type", credits_entity_1.Credits)
], Movie.prototype, "credits", void 0);
__decorate([
    graphql_1.Field((type) => [common_entity_1.Genre]),
    __metadata("design:type", Array)
], Movie.prototype, "genres", void 0);
__decorate([
    graphql_1.Field((type) => String, { nullable: true }),
    __metadata("design:type", String)
], Movie.prototype, "homepage", void 0);
__decorate([
    graphql_1.Field((type) => String, { nullable: true }),
    __metadata("design:type", String)
], Movie.prototype, "imdb_id", void 0);
__decorate([
    graphql_1.Field((type) => String, { nullable: true }),
    __metadata("design:type", String)
], Movie.prototype, "original_language", void 0);
__decorate([
    graphql_1.Field((type) => String, { nullable: true }),
    __metadata("design:type", String)
], Movie.prototype, "original_title", void 0);
__decorate([
    graphql_1.Field((type) => String, { nullable: true }),
    __metadata("design:type", String)
], Movie.prototype, "overview", void 0);
__decorate([
    graphql_1.Field((type) => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], Movie.prototype, "popularity", void 0);
__decorate([
    graphql_1.Field((type) => String, { nullable: true }),
    __metadata("design:type", String)
], Movie.prototype, "poster_path", void 0);
__decorate([
    graphql_1.Field((type) => [common_entity_1.Company]),
    __metadata("design:type", Array)
], Movie.prototype, "production_companies", void 0);
__decorate([
    graphql_1.Field((type) => [common_entity_1.Country]),
    __metadata("design:type", Array)
], Movie.prototype, "production_countries", void 0);
__decorate([
    graphql_1.Field((type) => String, { nullable: true }),
    __metadata("design:type", String)
], Movie.prototype, "release_date", void 0);
__decorate([
    graphql_1.Field((type) => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], Movie.prototype, "revenue", void 0);
__decorate([
    graphql_1.Field((type) => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], Movie.prototype, "runtime", void 0);
__decorate([
    graphql_1.Field((type) => [common_entity_1.Language]),
    __metadata("design:type", Array)
], Movie.prototype, "spoken_languages", void 0);
__decorate([
    graphql_1.Field((type) => String, { nullable: true }),
    __metadata("design:type", String)
], Movie.prototype, "status", void 0);
__decorate([
    graphql_1.Field((type) => String, { nullable: true }),
    __metadata("design:type", String)
], Movie.prototype, "tagline", void 0);
__decorate([
    graphql_1.Field((type) => video_entity_1.VideoResults),
    __metadata("design:type", video_entity_1.VideoResults)
], Movie.prototype, "videos", void 0);
__decorate([
    graphql_1.Field((type) => graphql_1.Float, { nullable: true }),
    __metadata("design:type", Number)
], Movie.prototype, "vote_average", void 0);
__decorate([
    graphql_1.Field((type) => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], Movie.prototype, "vote_count", void 0);
Movie = __decorate([
    graphql_1.ObjectType()
], Movie);
exports.Movie = Movie;
//# sourceMappingURL=movie.entity.js.map