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
exports.Show = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_entity_1 = require("../../common/entities/common.entity");
const core_entity_1 = require("../../common/entities/core.entity");
const person_entity_1 = require("../../people/entities/person.entity");
const episode_entity_1 = require("./episode.entity");
const network_entity_1 = require("./network.entity");
const season_entity_1 = require("./season.entity");
let Creator = class Creator extends graphql_1.PickType(person_entity_1.Person, [
    'id',
    'name',
    'gender',
    'profile_path',
]) {
};
__decorate([
    graphql_1.Field((type) => String, { nullable: true }),
    __metadata("design:type", String)
], Creator.prototype, "credir_id", void 0);
Creator = __decorate([
    graphql_1.ObjectType()
], Creator);
let LastEpisode = class LastEpisode extends graphql_1.PickType(episode_entity_1.Episode, [
    'air_date',
    'episode_number',
    'id',
    'name',
    'overview',
    'production_code',
    'season_number',
    'still_path',
    'vote_average',
    'vote_count',
]) {
};
LastEpisode = __decorate([
    graphql_1.ObjectType()
], LastEpisode);
let Show = class Show extends core_entity_1.CoreEntity {
};
__decorate([
    graphql_1.Field((type) => String, { nullable: true }),
    __metadata("design:type", String)
], Show.prototype, "backdrop_path", void 0);
__decorate([
    graphql_1.Field((type) => [Creator]),
    __metadata("design:type", Array)
], Show.prototype, "created_by", void 0);
__decorate([
    graphql_1.Field((type) => [graphql_1.Int]),
    __metadata("design:type", Array)
], Show.prototype, "episode_run_time", void 0);
__decorate([
    graphql_1.Field((type) => String, { nullable: true }),
    __metadata("design:type", String)
], Show.prototype, "first_air_date", void 0);
__decorate([
    graphql_1.Field((type) => [common_entity_1.Genre]),
    __metadata("design:type", Array)
], Show.prototype, "genres", void 0);
__decorate([
    graphql_1.Field((type) => String, { nullable: true }),
    __metadata("design:type", String)
], Show.prototype, "homepage", void 0);
__decorate([
    graphql_1.Field((type) => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], Show.prototype, "in_production", void 0);
__decorate([
    graphql_1.Field((type) => [common_entity_1.Language]),
    __metadata("design:type", Array)
], Show.prototype, "languages", void 0);
__decorate([
    graphql_1.Field((type) => String, { nullable: true }),
    __metadata("design:type", String)
], Show.prototype, "last_air_date", void 0);
__decorate([
    graphql_1.Field((type) => LastEpisode, { nullable: true }),
    __metadata("design:type", LastEpisode)
], Show.prototype, "last_episode_to_air", void 0);
__decorate([
    graphql_1.Field((type) => String, { nullable: true }),
    __metadata("design:type", String)
], Show.prototype, "name", void 0);
__decorate([
    graphql_1.Field((type) => [network_entity_1.Network]),
    __metadata("design:type", Array)
], Show.prototype, "networks", void 0);
__decorate([
    graphql_1.Field((type) => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], Show.prototype, "number_of_episodes", void 0);
__decorate([
    graphql_1.Field((type) => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], Show.prototype, "number_of_seasons", void 0);
__decorate([
    graphql_1.Field((type) => [String]),
    __metadata("design:type", Array)
], Show.prototype, "origin_country", void 0);
__decorate([
    graphql_1.Field((type) => String, { nullable: true }),
    __metadata("design:type", String)
], Show.prototype, "original_language", void 0);
__decorate([
    graphql_1.Field((type) => String, { nullable: true }),
    __metadata("design:type", String)
], Show.prototype, "original_name", void 0);
__decorate([
    graphql_1.Field((type) => String, { nullable: true }),
    __metadata("design:type", String)
], Show.prototype, "overview", void 0);
__decorate([
    graphql_1.Field((type) => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], Show.prototype, "popularity", void 0);
__decorate([
    graphql_1.Field((type) => String, { nullable: true }),
    __metadata("design:type", String)
], Show.prototype, "poster_path", void 0);
__decorate([
    graphql_1.Field((type) => [common_entity_1.Company]),
    __metadata("design:type", Array)
], Show.prototype, "production_companies", void 0);
__decorate([
    graphql_1.Field((type) => [common_entity_1.Country]),
    __metadata("design:type", Array)
], Show.prototype, "production_countries", void 0);
__decorate([
    graphql_1.Field((type) => [season_entity_1.Season]),
    __metadata("design:type", Array)
], Show.prototype, "seasons", void 0);
__decorate([
    graphql_1.Field((type) => [common_entity_1.Language]),
    __metadata("design:type", Array)
], Show.prototype, "spoken_languages", void 0);
__decorate([
    graphql_1.Field((type) => String, { nullable: true }),
    __metadata("design:type", String)
], Show.prototype, "status", void 0);
__decorate([
    graphql_1.Field((type) => String, { nullable: true }),
    __metadata("design:type", String)
], Show.prototype, "tagline", void 0);
__decorate([
    graphql_1.Field((type) => String, { nullable: true }),
    __metadata("design:type", String)
], Show.prototype, "type", void 0);
__decorate([
    graphql_1.Field((type) => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], Show.prototype, "vote_average", void 0);
__decorate([
    graphql_1.Field((type) => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], Show.prototype, "vote_count", void 0);
Show = __decorate([
    graphql_1.ObjectType()
], Show);
exports.Show = Show;
//# sourceMappingURL=show.entity.js.map