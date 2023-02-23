import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Movie } from "../../types";
import searchMoviesApi from "../../services/searchMoviesApi";

interface SearchBarProps {
  placeholder?: string;
  setResults: React.Dispatch<React.SetStateAction<Movie[]>>;
}

const SearchBar: React.FC<SearchBarProps> = (props) => {
  const { placeholder = "Search for movies or TV series", setResults } = props;

  const [query, setQuery] = useState("");

  useEffect(() => {
    const searchResults = async () => await searchMoviesApi(query);

    searchResults()
      .then((res) => {
        const foundMovies = res?.data.searchMovie.movies;

        if (foundMovies) setResults(foundMovies);
      })
      .catch((err) => err);
  }, [query]);

  return (
    <div className="flex grow mb-8 relative   w-3/4 mx-auto">
      <input
        className="md:heading-md md:placeholder:heading-md w-full border-primary   border-2 text-base font-light placeholder:text-base placeholder:text-app-placeholder rounded-lg p-3  pl-20"
        type="text"
        placeholder={placeholder}
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      <FontAwesomeIcon
        className="h-4 w-4 md:h-6 md:w-6 absolute top-3 left-6"
        icon={faMagnifyingGlass}
      />
    </div>
  );
};

export default SearchBar;
