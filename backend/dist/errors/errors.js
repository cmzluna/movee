"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMessage = void 0;
exports.errorMessage = {
    showNotFound: 'Show with that id does not exists.',
    seasonNotFound: 'Season number does not exists.',
    episodeNotFound: 'Episode number does not exists.',
    movieNotFound: 'Movie with that id does not exists.',
    personNotFound: 'Person with that id does not exists.',
    noConnection: "No response, please check the server's internet connection.",
    invalidApiKey: 'Invalid API key',
    serverError: (statusText) => `TMDB Server Error ${statusText}`,
};
//# sourceMappingURL=errors.js.map