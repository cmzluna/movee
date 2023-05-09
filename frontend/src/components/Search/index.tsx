import { useState } from "react";
import Collection from "../Collection";
import SearchBar from "../SearchBar";
import { Movie } from "../../types";

type Props = {
  isLoading: boolean;
};

const Search = ({ isLoading }: Props) => {
  const [results, setResults] = useState<Movie[]>([]);

  return (
    <div>
      <SearchBar setResults={setResults} />

      {!!results.length && (
        <Collection
          isLoading={isLoading}
          data={results}
          type={"Search Results"}
        />
      )}
    </div>
  );
};

export default Search;
