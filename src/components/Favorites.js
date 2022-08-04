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

  return (
    <div id="favorite-container">
      <h1 className="page-title">MY FAVORITES</h1>
      <div id="image-field">{displayFavorites}</div>
    </div>
  );
}

export default Favorites;
