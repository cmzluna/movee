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
exports.Company = exports.Language = exports.Country = exports.Genre = void 0;
const graphql_1 = require("@nestjs/graphql");
const core_entity_1 = require("./core.entity");
let Genre = class Genre extends core_entity_1.CoreEntity {
};
__decorate([
    graphql_1.Field((type) => String),
    __metadata("design:type", String)
], Genre.prototype, "name", void 0);
Genre = __decorate([
    graphql_1.ObjectType()
], Genre);
exports.Genre = Genre;
let Country = class Country {
};
__decorate([
    graphql_1.Field((type) => String),
    __metadata("design:type", String)
], Country.prototype, "iso_3166_1", void 0);
__decorate([
    graphql_1.Field((type) => String),
    __metadata("design:type", String)
], Country.prototype, "name", void 0);
Country = __decorate([
    graphql_1.ObjectType()
], Country);
exports.Country = Country;
let Language = class Language {
};
__decorate([
    graphql_1.Field((type) => String),
    __metadata("design:type", String)
], Language.prototype, "iso_639_1", void 0);
__decorate([
    graphql_1.Field((type) => String),
    __metadata("design:type", String)
], Language.prototype, "name", void 0);
Language = __decorate([
    graphql_1.ObjectType()
], Language);
exports.Language = Language;
let Company = class Company extends core_entity_1.CoreEntity {
};
__decorate([
    graphql_1.Field((type) => String),
    __metadata("design:type", String)
], Company.prototype, "name", void 0);
__decorate([
    graphql_1.Field((type) => String, { nullable: true }),
    __metadata("design:type", String)
], Company.prototype, "logo_path", void 0);
__decorate([
    graphql_1.Field((type) => String, { nullable: true }),
    __metadata("design:type", String)
], Company.prototype, "origin_country", void 0);
Company = __decorate([
    graphql_1.ObjectType()
], Company);
exports.Company = Company;
//# sourceMappingURL=common.entity.js.map