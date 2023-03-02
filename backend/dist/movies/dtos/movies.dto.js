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
exports.MovieOutput = exports.MoviesOutput = void 0;
const graphql_1 = require("@nestjs/graphql");
const output_dto_1 = require("../../common/dtos/output.dto");
const movie_entity_1 = require("../entities/movie.entity");
let MoviesOutput = class MoviesOutput extends output_dto_1.CoreOutput {
};
__decorate([
    graphql_1.Field((type) => [movie_entity_1.Movie], { nullable: true }),
    __metadata("design:type", Array)
], MoviesOutput.prototype, "movies", void 0);
MoviesOutput = __decorate([
    graphql_1.ObjectType()
], MoviesOutput);
exports.MoviesOutput = MoviesOutput;
let MovieOutput = class MovieOutput extends output_dto_1.CoreOutput {
};
__decorate([
    graphql_1.Field((type) => movie_entity_1.Movie, { nullable: true }),
    __metadata("design:type", movie_entity_1.Movie)
], MovieOutput.prototype, "movie", void 0);
MovieOutput = __decorate([
    graphql_1.ObjectType()
], MovieOutput);
exports.MovieOutput = MovieOutput;
//# sourceMappingURL=movies.dto.js.map