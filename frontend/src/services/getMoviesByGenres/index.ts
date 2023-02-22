import callApi from "../callApi";
import { Movie } from "../../types";

const GET_MOVIES_BY_GENRES = `
query GetGenres($genresIds: String!) {
  findByGenres(query: $genresIds) {
    movies {
       id
       original_title
       original_language
       release_date
       overview
   }
 }
}`;

type genresFilter = {
  findByGenres: { movies: Movie[] };
};

const getMoviesByGenres = async (genresIds: string[]) => {
  //   if (!genresIds || !genresIds.length) return [];

  const queryVariables = genresIds.join(",");

  return callApi<genresFilter>(GET_MOVIES_BY_GENRES, {
    genresIds: queryVariables,
  });
};

export default getMoviesByGenres;
