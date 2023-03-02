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
exports.Credits = void 0;
const graphql_1 = require("@nestjs/graphql");
const core_entity_1 = require("../../common/entities/core.entity");
const cast_entity_1 = require("./cast.entity");
const crew_entity_1 = require("./crew.entity");
let Credits = class Credits extends core_entity_1.CoreEntity {
};
__decorate([
    graphql_1.Field((type) => [cast_entity_1.Cast]),
    __metadata("design:type", Array)
], Credits.prototype, "cast", void 0);
__decorate([
    graphql_1.Field((type) => [crew_entity_1.Crew]),
    __metadata("design:type", Array)
], Credits.prototype, "crew", void 0);
Credits = __decorate([
    graphql_1.ObjectType()
], Credits);
exports.Credits = Credits;
//# sourceMappingURL=credits.entity.js.map