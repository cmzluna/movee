import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getMovieApi from "../../services/getMovie";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  addFavorite,
  removeFavorite,
  selectFavorites,
} from "../../store/slices/favorites";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Movie } from "../../types";
import Rate from "../Rate";

const MovieDetail = () => {
  const favoritesList = useAppSelector(selectFavorites);
  const dispatch = useAppDispatch();
  // TODO const loggedUser = useAppSelector(selectLoggedUser);
  const { id } = useParams();
  const movieId = id && parseInt(id);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const isFavorite =
    favoritesList &&
    favoritesList.length &&
    favoritesList.some(({ id }) => id === movieId);

  const baseImageURL = "https://image.tmdb.org/t/p/w300";
  const posterImageURL = `https://image.tmdb.org/t/p/original${selectedMovie?.poster_path}`;
  const isMovieSelected = selectedMovie && !!Object.keys(selectedMovie).length;

  const addToFavorite = () => {
    if (isMovieSelected && isFavorite) {
      console.log("en if!");
      dispatch(removeFavorite(selectedMovie));
      return;
    }

    isMovieSelected &&
      // TODO:
      //  dispatch(addFavorite({ uid: "0", favorite: selectedMovie }));
      dispatch(addFavorite(selectedMovie));
    return;
  };

  useEffect(() => {
    const getMovie = async (id: number) => {
      const data = await getMovieApi(id);

      return data;
    };

    if (movieId && !isMovieSelected) {
      getMovie(movieId)
        .then((res) => {
          const movie = res?.data.movieDetail.movie;

          console.log("MOVIE = ", movie);
          if (movie) setSelectedMovie(movie);
        })
        .catch((err) => err);
    }
  }, [id, isMovieSelected, movieId]);

  return (
    <div className=" h-full w-full top-32 lg:top-20 left-16 lg:left-32 right-16 rounded-lg   ">
      <header
        style={{
          backgroundImage: `url(${posterImageURL})
         `,
        }}
        className={` bg-center h-full  bg-cover rounded-lg  `}
      >
        <div
          className=" w-full h-full  mx-auto  "
          style={{ background: " rgba(0, 0, 0, 0.6)" }}
        >
          <div className=" flex flex-wrap ">
            <div className=" h-80 w-full md:w-1/3 lg:w-1/3">
              <img
                src={`${baseImageURL}/${selectedMovie?.poster_path}`}
                alt=""
                className="block mx-auto w-full h-full object-cover object-top"
              />
              <FontAwesomeIcon
                className="cursor-pointer  w-10 h-10 absolute top-8 left-8 rounded-md opacity-80  "
                icon={faHeart}
                color={isFavorite ? " orange" : "gray-200"}
                onClick={addToFavorite}
              />
            </div>

            <div className=" relative w-full h-full md:w-2/3 lg:w-3/4  px-2 mx-auto  ">
              <div className=" content flex flex-col items-end">
                <h2 className="text-5xl py-4">
                  {selectedMovie?.original_title}
                </h2>
                <ul className="flex py-4 ">
                  {selectedMovie?.genres?.map((genre) => (
                    <li className=" tab_genre">{genre.name}</li>
                  ))}
                </ul>
                <div className=" text-start my-10 ">
                  {selectedMovie?.overview}

                  <div className="  mt-10 ">
                    <h2>Average rating:</h2>{" "}
                    {selectedMovie && (
                      <Rate rating={selectedMovie.vote_average} />
                    )}
                  </div>
                </div>

                <div className="flex flex-col mt-10 w-full items-start">
                  <h2>Main characters:</h2>{" "}
                  <ul className="flex flex-wrap">
                    {selectedMovie?.credits?.cast?.slice(0, 10).map((item) => (
                      <li>{item.character} - </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default MovieDetail;
