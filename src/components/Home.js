import React from "react";
import HeroContainer from "./HeroContainer";
import HeroSpecs from "./HeroSpecs";

const Home = ({
  heroes,
  featuredHero,
  showHeroSpecs,
  onHeroCardClick,
  onGoBack,
}) => {
  return (
    <div>
      {showHeroSpecs ? (
        <HeroSpecs
          featuredHero={featuredHero}
          showHeroSpecs={showHeroSpecs}
          onGoBack={onGoBack}
        />
      ) : (
        <HeroContainer heroes={heroes} onHeroCardClick={onHeroCardClick} />
      )}
    </div>
  );
};

export default Home;
