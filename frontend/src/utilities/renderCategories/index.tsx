import React from "react";
import Collection from "../../components/Collection";
import getMoviesByGenres from "../../services/getMoviesByGenres";
import { Genre } from "../../types";

const selectedCategoryResults = async (genreId: number) => {
  const data = await getMoviesByGenres([genreId.toString()]);

  return data;
};

const renderGenreCollection = async (genre: Genre) => {
  const moviesList = await selectedCategoryResults(genre.id)
    .then((res) => {
      const moviesOfGenre = res?.data.findByGenres.movies;

      if (moviesOfGenre) return moviesOfGenre;
    })
    .catch((err) => err);
  console.log("====================================");
  console.log("hola ", moviesList);
  console.log("====================================");
  return <Collection data={moviesList} isLatestReleases={false} />;
};

export default renderGenreCollection;
