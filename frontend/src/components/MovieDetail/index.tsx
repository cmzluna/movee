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
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MovieDetail = () => {
  // TODO const loggedUser = useAppSelector(selectLoggedUser);
  // move skeletons to a separate file
  const favoritesList = useAppSelector(selectFavorites);
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const movieId = id && parseInt(id);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const isFavorite =
    favoritesList &&
    favoritesList.length &&
    favoritesList.some(({ id }) => id === movieId);

  const baseImageURL = "https://image.tmdb.org/t/p/w300";
  const posterImageURL = `https://image.tmdb.org/t/p/original${selectedMovie?.poster_path}`;
  const isMovieSelected = selectedMovie && !!Object.keys(selectedMovie).length;

  const addToFavorite = () => {
    if (isMovieSelected && isFavorite) dispatch(removeFavorite(selectedMovie));

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
      // TODO: modify with useCallApi
      getMovie(movieId)
        .then((res) => {
          const movie = res?.data.movieDetail.movie;

          if (movie) setSelectedMovie(movie);
        })
        .catch((err) => err);

      setIsLoading(false);
    }
  }, [isMovieSelected, movieId]);

  return (
    <div className=" h-full w-full top-32 lg:top-20 left-16 lg:left-32 right-16 rounded-lg   ">
      <header
        style={{
          backgroundImage: `url(${posterImageURL})
         `,
        }}
        className={` bg-center    bg-cover rounded-lg  `}
      >
        <div
          className=" w-full   mx-auto  "
          style={{ background: " rgba(0, 0, 0, 0.6)" }}
        >
          <div className=" flex flex-wrap    ">
            <div className=" h-80 w-full md:w-1/3 lg:w-1/3">
              {selectedMovie ? (
                <img
                  src={`${baseImageURL}/${selectedMovie?.poster_path}`}
                  alt=""
                  className="block mx-auto w-full h-full object-cover object-top"
                />
              ) : (
                <Skeleton className="block mx-auto w-full h-full object-cover object-top" />
              )}

              <FontAwesomeIcon
                className="cursor-pointer  w-10 h-10 absolute top-8 left-8 rounded-md opacity-80  "
                icon={faHeart}
                color={isFavorite ? " orange" : "gray-200"}
                onClick={addToFavorite}
              />
            </div>

            <div className=" relative w-full md:w-2/3 lg:w-3/4 px-2 mx-auto  ">
              <div className=" content flex flex-col items-end">
                <h2 className="text-5xl py-4">
                  {selectedMovie?.original_title}
                </h2>
                <div className="  mt-10 ">
                  <h2>Average rating:</h2>
                  {selectedMovie ? (
                    <Rate rating={selectedMovie.vote_average} />
                  ) : (
                    <Skeleton />
                  )}
                </div>

                <ul className="flex py-4  ">
                  {selectedMovie ? (
                    selectedMovie?.genres.map((genre) => (
                      <li className=" tab_genre">{genre.name}</li>
                    ))
                  ) : (
                    <div className="flex gap-2">
                      {[...Array(5)].map((_, index) => (
                        <Skeleton
                          key={index}
                          className=" ml-2 rounded-md py-px px-2 sm:ml-4"
                        />
                      ))}
                    </div>
                  )}
                </ul>

                <div className=" text-start my-10 h-42 w-full">
                  {selectedMovie ? (
                    selectedMovie?.overview
                  ) : (
                    <Skeleton
                      count={6}
                      className=" ml-2 rounded-md py-px px-2 sm:ml-4"
                    />
                  )}
                </div>

                <div className="flex flex-col mt-3 w-full items-start">
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
