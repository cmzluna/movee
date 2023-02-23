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
      return await getMoviesByGenres([genreId.toString()]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    selectedCategoryResults(props.id)
      .then((res) => {
        const moviesOfGenre = res?.data.findByGenres.movies;

        if (moviesOfGenre) {
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
