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
exports.Episode = void 0;
const graphql_1 = require("@nestjs/graphql");
const core_entity_1 = require("../../common/entities/core.entity");
const crew_entity_1 = require("../../people/entities/crew.entity");
const person_entity_1 = require("../../people/entities/person.entity");
let GuestStar = class GuestStar extends graphql_1.PickType(person_entity_1.Person, ['id', 'name', 'profile_path']) {
};
__decorate([
    graphql_1.Field((type) => String, { nullable: true }),
    __metadata("design:type", String)
], GuestStar.prototype, "credit_id", void 0);
__decorate([
    graphql_1.Field((type) => String, { nullable: true }),
    __metadata("design:type", String)
], GuestStar.prototype, "character", void 0);
__decorate([
    graphql_1.Field((type) => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], GuestStar.prototype, "order", void 0);
GuestStar = __decorate([
    graphql_1.ObjectType()
], GuestStar);
let Episode = class Episode extends core_entity_1.CoreEntity {
};
__decorate([
    graphql_1.Field((type) => String, { nullable: true }),
    __metadata("design:type", String)
], Episode.prototype, "air_date", void 0);
__decorate([
    graphql_1.Field((type) => [crew_entity_1.Crew]),
    __metadata("design:type", Array)
], Episode.prototype, "crew", void 0);
__decorate([
    graphql_1.Field((type) => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], Episode.prototype, "episode_number", void 0);
__decorate([
    graphql_1.Field((type) => [GuestStar]),
    __metadata("design:type", Array)
], Episode.prototype, "guest_stars", void 0);
__decorate([
    graphql_1.Field((type) => String, { nullable: true }),
    __metadata("design:type", String)
], Episode.prototype, "name", void 0);
__decorate([
    graphql_1.Field((type) => String, { nullable: true }),
    __metadata("design:type", String)
], Episode.prototype, "overview", void 0);
__decorate([
    graphql_1.Field((type) => String, { nullable: true }),
    __metadata("design:type", String)
], Episode.prototype, "production_code", void 0);
__decorate([
    graphql_1.Field((type) => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], Episode.prototype, "season_number", void 0);
__decorate([
    graphql_1.Field((type) => String, { nullable: true }),
    __metadata("design:type", String)
], Episode.prototype, "still_path", void 0);
__decorate([
    graphql_1.Field((type) => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], Episode.prototype, "vote_average", void 0);
__decorate([
    graphql_1.Field((type) => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], Episode.prototype, "vote_count", void 0);
Episode = __decorate([
    graphql_1.ObjectType()
], Episode);
exports.Episode = Episode;
//# sourceMappingURL=episode.entity.js.map