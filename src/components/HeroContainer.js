import React from "react";
import HeroCard from "./HeroCard";

function HeroContainer({ heroes, handleFavorites, favClicked, setFavClicked }) {
  const heroArr = heroes.map((hero) => {
    return <HeroCard key={hero.id} hero={hero} handleFavorites={handleFavorites} favClicked={favClicked} setFavClicked={setFavClicked} />;
  });
  return <div id="image-field"> {heroArr} </div>;
}

export default HeroContainer;
