import { useState } from "react";
import Collection from "../Collection";
import SearchBar from "../SearchBar";
import { Movie } from "../../types";

const Search = () => {
  const [results, setResults] = useState<Movie[]>([]);

  console.log("results ====>  ", results);
  return (
    <div>
      <SearchBar setResults={setResults} />

      {!!results.length && (
        <Collection data={results} type={"Search Results"} />
      )}
    </div>
  );
};

export default Search;
