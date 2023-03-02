export declare const endPoints: {
    movies: {
        nowPlaying: string;
        upcoming: string;
        popular: string;
        findById: (id: number) => string;
        genres: (genresIds: string) => string;
        findSimilarById: (id: number) => string;
    };
    shows: {
        topRated: string;
        popular: string;
        airingToday: string;
        findById: (id: number) => string;
        findSimilarById: (id: number) => string;
        getSeasonDetail: (id: number, seasonNumber: number) => string;
        getEpisodeDetail: (id: number, seasonNumber: number, episodeNumber: number) => string;
    };
    people: {
        findById: (id: number) => string;
    };
    search: {
        movie: string;
        show: string;
        person: string;
    };
};
