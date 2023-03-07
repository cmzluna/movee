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
exports.PeopleResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_dto_1 = require("../common/dtos/common.dto");
const people_dto_1 = require("./dtos/people.dto");
const person_entity_1 = require("./entities/person.entity");
const people_service_1 = require("./people.service");
let PeopleResolver = class PeopleResolver {
    constructor(peopleService) {
        this.peopleService = peopleService;
    }
    personDetail(personDetailInput) {
        return this.peopleService.personDetail(personDetailInput.id);
    }
    searchPeople(searchPeopleInput) {
        return this.peopleService.searchPeople(searchPeopleInput.query);
    }
};
__decorate([
    graphql_1.Query((returns) => people_dto_1.PersonOutput),
    __param(0, graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [common_dto_1.IdInput]),
    __metadata("design:returntype", Promise)
], PeopleResolver.prototype, "personDetail", null);
__decorate([
    graphql_1.Query((returns) => people_dto_1.PeopleOutput),
    __param(0, graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [common_dto_1.SearchInput]),
    __metadata("design:returntype", Promise)
], PeopleResolver.prototype, "searchPeople", null);
PeopleResolver = __decorate([
    graphql_1.Resolver((of) => person_entity_1.Person),
    __metadata("design:paramtypes", [people_service_1.PeopleService])
], PeopleResolver);
exports.PeopleResolver = PeopleResolver;
//# sourceMappingURL=people.resolver.js.map