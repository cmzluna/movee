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
exports.ShowsService = void 0;
const common_1 = require("@nestjs/common");
const api_service_1 = require("../api/api.service");
const errors_1 = require("../errors/errors");
let ShowsService = class ShowsService {
    constructor(api) {
        this.api = api;
    }
    async topRated() {
        try {
            const shows = await this.api.shows.topRated();
            return { ok: true, shows };
        }
        catch (error) {
            return { ok: false, error };
        }
    }
    async popular() {
        try {
            const shows = await this.api.shows.popular();
            return { ok: true, shows };
        }
        catch (error) {
            return { ok: false, error };
        }
    }
    async airingToday() {
        try {
            const shows = await this.api.shows.airingToday();
            return { ok: true, shows };
        }
        catch (error) {
            return { ok: false, error };
        }
    }
    async showDetail(id) {
        try {
            const show = await this.api.shows.findById(id);
            if (!show) {
                return { ok: false, error: errors_1.errorMessage.showNotFound };
            }
            return { ok: true, show };
        }
        catch (error) {
            return { ok: false, error };
        }
    }
    async searchShow(query) {
        try {
            const shows = await this.api.search.show(query);
            return { ok: true, shows };
        }
        catch (error) {
            return { ok: false, error };
        }
    }
    async similarShows(id) {
        try {
            const shows = await this.api.shows.findSimilarById(id);
            if (!shows) {
                return { ok: false, error: errors_1.errorMessage.showNotFound };
            }
            return { ok: true, shows };
        }
        catch (error) {
            return { ok: false, error };
        }
    }
    async seasonDetail(showId, seasonNumber) {
        try {
            const show = await this.api.shows.findById(showId);
            if (!show) {
                return { ok: false, error: errors_1.errorMessage.showNotFound };
            }
            const season = await this.api.shows.getSeasonDetail(showId, seasonNumber);
            if (!season) {
                return { ok: false, error: errors_1.errorMessage.seasonNotFound };
            }
            return { ok: true, season };
        }
        catch (error) {
            return { ok: false, error };
        }
    }
    async episodeDetail(showId, seasonNumber, episodeNumber) {
        try {
            const show = await this.api.shows.findById(showId);
            if (!show) {
                return { ok: false, error: errors_1.errorMessage.showNotFound };
            }
            const season = await this.api.shows.getSeasonDetail(showId, seasonNumber);
            if (!season) {
                return { ok: false, error: errors_1.errorMessage.seasonNotFound };
            }
            const episode = await this.api.shows.getEpisodeDetail(showId, seasonNumber, episodeNumber);
            if (!episode) {
                return { ok: false, error: errors_1.errorMessage.episodeNotFound };
            }
            return { ok: true, episode };
        }
        catch (error) {
            return { ok: false, error };
        }
    }
};
ShowsService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [api_service_1.ApiService])
], ShowsService);
exports.ShowsService = ShowsService;
//# sourceMappingURL=shows.service.js.map