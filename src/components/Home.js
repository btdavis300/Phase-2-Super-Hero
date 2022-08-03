import React from "react";
import HeroContainer from "./HeroContainer";
import HeroSpecs from "./HeroSpecs";

<<<<<<< HEAD
const Home = ({ heroes, handleFavorites, favClicked, setFavClicked }) => {
  return (
    <div>
      <HeroContainer
        heroes={heroes}
        handleFavorites={handleFavorites}
        favClicked={favClicked}
        setFavClicked={setFavClicked}
      />
    </div>
  );
=======
const Home = ({ heroes, featuredHero, showHeroSpecs, onHeroCardClick }) => {
    return (
        <div>
            {showHeroSpecs ? <HeroSpecs showHeroSpecs={showHeroSpecs} /> : <HeroContainer heroes={heroes} onHeroCardClick={onHeroCardClick} />}
        </div>
    );
>>>>>>> kelan1
};

export default Home;
