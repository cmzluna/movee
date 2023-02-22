import React, { useEffect, useState } from "react";
import getAllGenres from "../../services/getAllGenres";
import getMoviesByGenres from "../../services/getMoviesByGenres";
import { Genre, Movie } from "../../types";
import Collection from "../Collection";

const Categories = () => {
  const [genresList, setGenresList] = useState<Genre[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<Genre>({
    id: 0,
    name: "",
  });

  useEffect(() => {
    const genresList = async () => {
      const data = await getAllGenres<Genre>();

      return data;
    };

    genresList()
      .then((data) => {
        const genres = data?.genres;
        if (genres) {
          setGenresList(genres);
          console.log("GENRES in categories= ", genres);
        }
      })
      .catch((err) => err);
  }, []);

  useEffect(() => {
    const selectedCategoryResults = async () => {
      const data = await getMoviesByGenres(["37"]);

      return data;
    };

    selectedCategoryResults()
      .then((res) => {
        const genreMovies = res?.data.findByGenres.movies;

        if (genreMovies) {
          console.log("GENRES in categories= ", genreMovies);
          // setGenresList(genreMovies);
        }
      })
      .catch((err) => err);
  }, []);

  return (
    <div className=" bg-red-200">
      <p>this is the categories list</p>
      {/* <Collection
        data={latestReleases}
        title={"Latest Releases"}
        isLatestReleases={false}
      /> */}
    </div>
  );
};

export default Categories;
