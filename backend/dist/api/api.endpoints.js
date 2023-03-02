"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.endPoints = void 0;
exports.endPoints = {
    movies: {
        nowPlaying: 'movie/now_playing',
        upcoming: 'movie/upcoming',
        popular: 'movie/popular',
        findById: (id) => `movie/${id}`,
        genres: (genresIds) => `discover/movie?with_genres=${genresIds}`,
        findSimilarById: (id) => `movie/${id}/similar`,
    },
    shows: {
        topRated: 'tv/top_rated',
        popular: 'tv/popular',
        airingToday: 'tv/airing_today',
        findById: (id) => `tv/${id}`,
        findSimilarById: (id) => `tv/${id}`,
        getSeasonDetail: (id, seasonNumber) => `tv/${id}/season/${seasonNumber}`,
        getEpisodeDetail: (id, seasonNumber, episodeNumber) => `tv/${id}/season/${seasonNumber}/episode/${episodeNumber}`,
    },
    people: {
        findById: (id) => `person/${id}`,
    },
    search: {
        movie: `search/movie`,
        show: `search/tv`,
        person: `search/person`,
    },
};
//# sourceMappingURL=api.endpoints.js.map