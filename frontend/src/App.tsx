import React, { useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
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

  console.log("EN APP");
  // SECCION CATEGORIAS
  // mostrar

  useEffect(() => {
    const getData = async () => {
      const data = await getLatestReleases();

      return data;
    };

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
              <Collection
                data={latestReleases}
                title={"Latest Releases"}
                isLatestReleases={false}
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
