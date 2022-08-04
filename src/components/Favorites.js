import React from "react";
import FavoriteCard from "./FavoriteCard";

function Favorites({ heroes, onRemoveFavoriteHero }) {
  const displayFavorites = heroes.map((hero) => {
    return (
      <FavoriteCard
        hero={hero}
        key={hero.id}
        onRemoveFavoriteHero={onRemoveFavoriteHero}
      />
    );
  });

  return <div id="image-field">{displayFavorites}</div>;
}

export default Favorites;
