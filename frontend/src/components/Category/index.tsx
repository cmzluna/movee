import React, { useEffect, useState } from "react";
import getMoviesByGenres from "../../services/getMoviesByGenres";
import { Movie } from "../../types";
import Collection from "../Collection";

interface CategoryInterface {
  id: number;
  name: string;
}

const Category: React.FC<CategoryInterface> = (props) => {
  const [data, setData] = useState<Movie[]>();

  const selectedCategoryResults = async (genreId: number) => {
    try {
      const moviesOfGenre = await getMoviesByGenres([genreId.toString()]);
      return moviesOfGenre;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    selectedCategoryResults(props.id)
      .then((res) => {
        const moviesOfGenre = res?.data.findByGenres.movies;

        if (moviesOfGenre) {
          console.log("moviesOfGenre ====", moviesOfGenre);
          setData(moviesOfGenre);
        }
      })
      .catch((err) => err);
  }, [props]);

  return (
    <div>
      {data && (
        <Collection
          data={data}
          type={props.name}
          itemsLimit={4}
          isLatestReleases={false}
        />
      )}
    </div>
  );
};

export default Category;
