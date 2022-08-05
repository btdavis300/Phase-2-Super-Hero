import React from "react";
import FavoriteCard from "./FavoriteCard";
import HeroSpecs from "./HeroSpecs";

function Favorites({ heroes, onRemoveFavoriteHero, showHeroSpecs, featuredHero, onGoBack, onFavoriteHero, onHeroCardClick }) {
  const displayFavorites = heroes.map((hero) => {
    return (
      <FavoriteCard
        hero={hero}
        key={hero.id}
        onRemoveFavoriteHero={onRemoveFavoriteHero}
        onHeroCardClick={onHeroCardClick}
      />
    );
  });

  return (
    <div id="favorite-container">
      <h1 className="page-title">MY FAVORITES</h1>
      <div id="image-field">
        {showHeroSpecs ?
          <HeroSpecs
            featuredHero={featuredHero}
            showHeroSpecs={showHeroSpecs}
            onGoBack={onGoBack}
            onFavoriteHero={onFavoriteHero}
          />
          : displayFavorites}</div>
    </div>
  );
}

export default Favorites;
