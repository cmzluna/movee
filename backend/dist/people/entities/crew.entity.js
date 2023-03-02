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
exports.Crew = void 0;
const graphql_1 = require("@nestjs/graphql");
const core_entity_1 = require("../../common/entities/core.entity");
let Crew = class Crew extends core_entity_1.CoreEntity {
};
__decorate([
    graphql_1.Field((type) => String, { nullable: true }),
    __metadata("design:type", String)
], Crew.prototype, "department", void 0);
__decorate([
    graphql_1.Field((type) => String, { nullable: true }),
    __metadata("design:type", String)
], Crew.prototype, "original_language", void 0);
__decorate([
    graphql_1.Field((type) => String, { nullable: true }),
    __metadata("design:type", String)
], Crew.prototype, "original_title", void 0);
__decorate([
    graphql_1.Field((type) => String, { nullable: true }),
    __metadata("design:type", String)
], Crew.prototype, "job", void 0);
__decorate([
    graphql_1.Field((type) => String, { nullable: true }),
    __metadata("design:type", String)
], Crew.prototype, "overview", void 0);
__decorate([
    graphql_1.Field((type) => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], Crew.prototype, "vote_count", void 0);
__decorate([
    graphql_1.Field((type) => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], Crew.prototype, "video", void 0);
__decorate([
    graphql_1.Field((type) => String, { nullable: true }),
    __metadata("design:type", String)
], Crew.prototype, "poster_path", void 0);
__decorate([
    graphql_1.Field((type) => String, { nullable: true }),
    __metadata("design:type", String)
], Crew.prototype, "backdrop_path", void 0);
__decorate([
    graphql_1.Field((type) => String, { nullable: true }),
    __metadata("design:type", String)
], Crew.prototype, "title", void 0);
__decorate([
    graphql_1.Field((type) => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], Crew.prototype, "popularity", void 0);
__decorate([
    graphql_1.Field((type) => [graphql_1.Int]),
    __metadata("design:type", Array)
], Crew.prototype, "genre_ids", void 0);
__decorate([
    graphql_1.Field((type) => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], Crew.prototype, "vote_average", void 0);
__decorate([
    graphql_1.Field((type) => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], Crew.prototype, "adult", void 0);
__decorate([
    graphql_1.Field((type) => String, { nullable: true }),
    __metadata("design:type", String)
], Crew.prototype, "release_date", void 0);
__decorate([
    graphql_1.Field((type) => String, { nullable: true }),
    __metadata("design:type", String)
], Crew.prototype, "credit_id", void 0);
Crew = __decorate([
    graphql_1.ObjectType()
], Crew);
exports.Crew = Crew;
//# sourceMappingURL=crew.entity.js.map