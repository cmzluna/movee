import React from "react";
import { useAppSelector } from "../../store/hooks";
import { selectFavorites } from "../../store/slices/favorites";
import Collection from "../Collection";

const Favorites = () => {
  const favoritesList = useAppSelector(selectFavorites);

  return (
    <div>
      <div className="  ">
        {favoritesList.length ? (
          <Collection
            data={favoritesList}
            isLatestReleases={false}
            title="Your favorites"
          />
        ) : (
          <h2>No favorites yet...</h2>
        )}
      </div>
    </div>
  );
};

export default Favorites;
