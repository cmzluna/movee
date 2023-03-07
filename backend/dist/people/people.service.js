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
exports.PeopleService = void 0;
const common_1 = require("@nestjs/common");
const api_service_1 = require("../api/api.service");
const errors_1 = require("../errors/errors");
let PeopleService = class PeopleService {
    constructor(api) {
        this.api = api;
    }
    async personDetail(id) {
        try {
            const person = await this.api.people.findById(id);
            if (!person) {
                return { ok: false, error: errors_1.errorMessage.personNotFound };
            }
            return { ok: true, person };
        }
        catch (error) {
            return { ok: false, error };
        }
    }
    async searchPeople(query) {
        try {
            const people = await this.api.search.person(query);
            return { ok: true, people };
        }
        catch (error) {
            return { ok: false, error };
        }
    }
};
PeopleService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [api_service_1.ApiService])
], PeopleService);
exports.PeopleService = PeopleService;
//# sourceMappingURL=people.service.js.map