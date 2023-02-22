import React, { useEffect, useState, ChangeEvent } from "react";
import getAllGenres from "../../services/getAllGenres";
import getMoviesByGenres from "../../services/getMoviesByGenres";
import { Genre, Movie } from "../../types";
import Collection from "../Collection";
import Heading from "../Heading";

const Categories = () => {
  const [genresList, setGenresList] = useState<Genre[]>([]);
  const [moviesList, setMoviesList] = useState<Movie[]>([]);
  const [selectedGenreId, setSelectedGenreId] = useState(0);

  const categoryName = genresList.find(
    (genre) => genre.id === selectedGenreId
  )?.name;

  useEffect(() => {
    const getGenresList = async () => {
      const data = await getAllGenres<Genre>();

      return data;
    };

    getGenresList()
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
    console.log("selectedGenreId ====================================");
    console.log(selectedGenreId);
    console.log("====================================");
    const selectedCategoryResults = async () => {
      const data = await getMoviesByGenres([selectedGenreId.toString()]);

      return data;
    };

    selectedCategoryResults()
      .then((res) => {
        const moviesOfGenre = res?.data.findByGenres.movies;

        if (moviesOfGenre) setMoviesList(moviesOfGenre);
      })
      .catch((err) => err);
  }, [selectedGenreId]);

  const handleGenreSelection = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(typeof +e.target.value);
    setSelectedGenreId(+e.target.value);
  };

  return (
    <div className="">
      <label>
        <p>Select a category:</p>
        <select
          name="selectedGenre"
          className="select select-primary w-full max-w-xs border-primary border-1 my-2"
          value={selectedGenreId}
          onChange={handleGenreSelection}
        >
          <option disabled selected>
            All movies
          </option>
          {genresList &&
            genresList.map((el) => <option value={el.id}>{el.name}</option>)}
        </select>
      </label>
      {<Collection data={moviesList} isLatestReleases={false} />}{" "}
    </div>
  );
};

export default Categories;
