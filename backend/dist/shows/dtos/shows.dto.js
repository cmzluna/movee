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
exports.ShowOutput = exports.ShowsOutput = void 0;
const graphql_1 = require("@nestjs/graphql");
const output_dto_1 = require("../../common/dtos/output.dto");
const show_entity_1 = require("../entities/show.entity");
let ShowsOutput = class ShowsOutput extends output_dto_1.CoreOutput {
};
__decorate([
    graphql_1.Field((type) => [show_entity_1.Show], { nullable: true }),
    __metadata("design:type", Array)
], ShowsOutput.prototype, "shows", void 0);
ShowsOutput = __decorate([
    graphql_1.ObjectType()
], ShowsOutput);
exports.ShowsOutput = ShowsOutput;
let ShowOutput = class ShowOutput extends output_dto_1.CoreOutput {
};
__decorate([
    graphql_1.Field((type) => show_entity_1.Show, { nullable: true }),
    __metadata("design:type", show_entity_1.Show)
], ShowOutput.prototype, "show", void 0);
ShowOutput = __decorate([
    graphql_1.ObjectType()
], ShowOutput);
exports.ShowOutput = ShowOutput;
//# sourceMappingURL=shows.dto.js.map