import React from "react";
import HeroCard from "./HeroCard";

function Favorites({ heroes, favClicked, setFavClicked, handleFavorites }) {
  const favoriteHeroes = heroes.filter((hero) => hero.favorite === true);
  const displayFavorites = favoriteHeroes.map((hero) => {
    return (
      <HeroCard
        hero={hero}
        key={hero.id}
        favClicked={favClicked}
        setFavClicked={setFavClicked}
        handleFavorites={handleFavorites}
      />
    );
  });

  return <div>{displayFavorites}</div>;
}

export default Favorites;
