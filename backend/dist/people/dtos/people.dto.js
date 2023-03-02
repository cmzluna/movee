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
exports.PersonOutput = exports.PeopleOutput = void 0;
const graphql_1 = require("@nestjs/graphql");
const output_dto_1 = require("../../common/dtos/output.dto");
const person_entity_1 = require("../entities/person.entity");
let PeopleOutput = class PeopleOutput extends output_dto_1.CoreOutput {
};
__decorate([
    graphql_1.Field((type) => [person_entity_1.Person], { nullable: true }),
    __metadata("design:type", Array)
], PeopleOutput.prototype, "people", void 0);
PeopleOutput = __decorate([
    graphql_1.ObjectType()
], PeopleOutput);
exports.PeopleOutput = PeopleOutput;
let PersonOutput = class PersonOutput extends output_dto_1.CoreOutput {
};
__decorate([
    graphql_1.Field((type) => person_entity_1.Person, { nullable: true }),
    __metadata("design:type", person_entity_1.Person)
], PersonOutput.prototype, "person", void 0);
PersonOutput = __decorate([
    graphql_1.ObjectType()
], PersonOutput);
exports.PersonOutput = PersonOutput;
//# sourceMappingURL=people.dto.js.map