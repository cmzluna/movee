import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { Movie } from "./types";
import getLatestReleases from "./services/getLatestReleases";
import Collection from "./components/Collection";
import Search from "./components/Search";
import MovieDetail from "./components/MovieDetail";
import Drawer from "./components/Drawer";
import Categories from "./components/Categories";

function App() {
  const [latestReleases, setLatestReleases] = useState<Movie[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const getData = async () => await getLatestReleases();

    getData()
      .then((res) => {
        const moviesArray = res?.data.nowPlayingMovies.movies;

        if (moviesArray) setLatestReleases(moviesArray);
      })
      .catch((err) => err);
  }, []);

  const location = useLocation();
  const state = location.state as { backgroundLocation?: Location };

  return (
    <div className="App">
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/search" element={<Search />} />

        <Route
          path="/"
          element={
            <>
              <Search />
              <Collection
                data={latestReleases}
                title={"Latest Releases"}
                isLatestReleases={false}
                itemsLimit={6}
              />
              <Categories />
            </>
          }
        />
      </Routes>
      {state?.backgroundLocation && (
        <Routes>
          <Route
            path="/movie/:id"
            element={
              <Drawer type="MovieDetail" isOpen={true} setIsOpen={setIsOpen}>
                <MovieDetail />
              </Drawer>
            }
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
