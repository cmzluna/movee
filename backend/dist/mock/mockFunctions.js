"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockHttpServiceFunctions = exports.mockApiFunctions = void 0;
const api_service_1 = require("../api/api.service");
exports.mockApiFunctions = {
    movies: {
        nowPlaying: jest.fn(),
        upcoming: jest.fn(),
        popular: jest.fn(),
        findById: jest.fn(),
        findSimilarById: jest.fn(),
    },
    shows: {
        topRated: jest.fn(),
        popular: jest.fn(),
        airingToday: jest.fn(),
        findById: jest.fn(),
        findSimilarById: jest.fn(),
        getSeasonDetail: jest.fn(),
        getEpisodeDetail: jest.fn(),
    },
    people: {
        findById: jest.fn(),
    },
    search: {
        movie: jest.fn(),
        show: jest.fn(),
        person: jest.fn(),
    },
};
exports.mockHttpServiceFunctions = {
    get: jest.fn(),
};
//# sourceMappingURL=mockFunctions.js.map