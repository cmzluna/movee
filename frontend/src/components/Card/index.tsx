import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Movie } from "../../types";
import Rate from "../Rate";
export default function Card({
  id,
  original_title,
  original_language,
  poster_path,
  credits,
  release_date,
  vote_average,
  genres,
}: Movie) {
  const location = useLocation();
  const TMDB_IMAGE_ENDPOINT = "https://image.tmdb.org/t/p/w300";

  const testImage = `${TMDB_IMAGE_ENDPOINT}/${poster_path}`;

  const handleClick = () => {
    //  console.log("location en Card ", location);
  };

  return (
    <Link key={id} to={`/movie/${id}`} state={{ backgroundLocation: location }}>
      <div
        className="relative bg-gradient-to-b from-white to-black    bg-blue-900 card-hover-animation  mb-4 rounded-md overflow-hidden hover:gradient_border hover:cursor-pointer"
        onClick={handleClick}
      >
        <img
          src={testImage}
          alt="stew"
          className="  mix-blend-multiply h-[140px] md:h-[200px] lg:h-[240px] w-full object-cover object-center"
        />
        <div className=" w-full flex flex-col items-start absolute   bottom-2 left-2  b-10">
          <span className="font-bold">{original_title}</span>
          <span className="block   text-sm">{original_language}</span>
          <span className="block   text-sm">
            {genres &&
              genres.map((genre) => <p key={genre.id}>{genre.name}</p>)}
          </span>
          <span className="block   text-sm">{release_date} -</span>
          <Rate rating={vote_average} />
        </div>
      </div>
    </Link>
  );
}
