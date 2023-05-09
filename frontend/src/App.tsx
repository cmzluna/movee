import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { Movie } from "./types";
import getLatestReleases from "./services/getLatestReleases";
import Collection from "./components/Collection";
import Search from "./components/Search";
import MovieDetail from "./components/MovieDetail";
import Drawer from "./components/Drawer";
import Categories from "./components/Categories";
import useCallApi from "./hooks/useCallApi";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoading, data: latestReleases } = useCallApi(
    getLatestReleases,
    "data.nowPlayingMovies.movies"
  );
  const location = useLocation();
  const state = location.state as { backgroundLocation?: Location };

  return (
    <div className="App">
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/search" element={<Search isLoading={isLoading} />} />

        <Route
          path="/"
          element={
            <>
              <Search isLoading={isLoading} />

              <Collection
                isLoading={isLoading}
                data={latestReleases}
                title={"Latest Releases"}
                isLatestReleases={false}
                itemsLimit={6}
              />

              <Categories isLoading={isLoading} />
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
