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
exports.Person = void 0;
const graphql_1 = require("@nestjs/graphql");
const core_entity_1 = require("../../common/entities/core.entity");
let Person = class Person extends core_entity_1.CoreEntity {
};
__decorate([
    graphql_1.Field((type) => String, { nullable: true }),
    __metadata("design:type", String)
], Person.prototype, "birthday", void 0);
__decorate([
    graphql_1.Field((type) => String, { nullable: true }),
    __metadata("design:type", String)
], Person.prototype, "known_for_department", void 0);
__decorate([
    graphql_1.Field((type) => String, { nullable: true }),
    __metadata("design:type", String)
], Person.prototype, "deathday", void 0);
__decorate([
    graphql_1.Field((type) => String, { nullable: true }),
    __metadata("design:type", String)
], Person.prototype, "name", void 0);
__decorate([
    graphql_1.Field((type) => String, { nullable: true }),
    __metadata("design:type", String)
], Person.prototype, "also_knwon_as", void 0);
__decorate([
    graphql_1.Field((type) => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], Person.prototype, "gender", void 0);
__decorate([
    graphql_1.Field((type) => String, { nullable: true }),
    __metadata("design:type", String)
], Person.prototype, "biography", void 0);
__decorate([
    graphql_1.Field((type) => String, { nullable: true }),
    __metadata("design:type", String)
], Person.prototype, "place_of_birth", void 0);
__decorate([
    graphql_1.Field((type) => String, { nullable: true }),
    __metadata("design:type", String)
], Person.prototype, "profile_path", void 0);
__decorate([
    graphql_1.Field((type) => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], Person.prototype, "adult", void 0);
__decorate([
    graphql_1.Field((type) => String, { nullable: true }),
    __metadata("design:type", String)
], Person.prototype, "imdb_id", void 0);
__decorate([
    graphql_1.Field((type) => String, { nullable: true }),
    __metadata("design:type", String)
], Person.prototype, "homepage", void 0);
Person = __decorate([
    graphql_1.ObjectType()
], Person);
exports.Person = Person;
//# sourceMappingURL=person.entity.js.map