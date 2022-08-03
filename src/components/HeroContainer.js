import React from "react";
import HeroCard from "./HeroCard";

function HeroContainer({ heroes, onHeroCardClick }) {
  const heroArr = heroes.map((hero) => {
    return (
      <HeroCard key={hero.id} hero={hero} onHeroCardClick={onHeroCardClick} />
    );
  });
  return <div id="image-field"> {heroArr} </div>;
}

export default HeroContainer;
