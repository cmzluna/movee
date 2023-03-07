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
exports.EpisodeDetailInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const season_detail_dto_1 = require("./season-detail.dto");
let EpisodeDetailInput = class EpisodeDetailInput extends season_detail_dto_1.SeasonDetailInput {
};
__decorate([
    graphql_1.Field((type) => graphql_1.Int),
    __metadata("design:type", Number)
], EpisodeDetailInput.prototype, "episodeNumber", void 0);
EpisodeDetailInput = __decorate([
    graphql_1.ArgsType()
], EpisodeDetailInput);
exports.EpisodeDetailInput = EpisodeDetailInput;
//# sourceMappingURL=episode-detail.dto.js.map