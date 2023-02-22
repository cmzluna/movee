import React, { useEffect, useState, ChangeEvent } from "react";
import getAllGenres from "../../services/getAllGenres";
import getMoviesByGenres from "../../services/getMoviesByGenres";
import { Genre, Movie } from "../../types";
import renderGenreCollection from "../../utilities/renderCategories";
import renderCategories from "../../utilities/renderCategories";
import Category from "../Category";
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
    <>
      <label className="flex  justify-center">
        <select
          name="selectedGenre"
          className="select select-primary w-full max-w-xs border-primary border-1 my-2"
          value={selectedGenreId}
          onChange={handleGenreSelection}
        >
          <option value={0}>Search by category</option>
          {genresList &&
            genresList.map((el) => <option value={el.id}>{el.name}</option>)}
        </select>
      </label>

      {selectedGenreId === 0 ? (
        <>
          {genresList &&
            genresList.map((el) => <Category id={el.id} name={el.name} />)}
        </>
      ) : (
        <>
          <Collection
            data={moviesList}
            type={categoryName}
            isLatestReleases={false}
          />
        </>
      )}
      {}
    </>
  );
};

export default Categories;
