import callApi from "../callApi";
import { Movie } from "../../types";

const SEARCH_MOVIES = `
query SearchMovies($searchString: String!) {
  searchMovie(query: $searchString) {
    movies {
       id
       original_title
       original_language
       release_date
       overview
       poster_path
       release_date
       vote_average
   }
 }
}`;

type genresFilter = {
  searchMovie: { movies: Movie[] };
};

const searchMoviesApi = async (searchString: string) => {
  return callApi<genresFilter>(SEARCH_MOVIES, {
    searchString,
  });
};

export default searchMoviesApi;
