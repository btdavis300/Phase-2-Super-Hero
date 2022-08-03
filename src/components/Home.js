import React from "react";
import HeroContainer from "./HeroContainer";
import HeroSpecs from "./HeroSpecs";

const Home = ({ heroes, featuredHero, showHeroSpecs, onHeroCardClick }) => {
    return (
        <div>
            {showHeroSpecs ? <HeroSpecs showHeroSpecs={showHeroSpecs} /> : <HeroContainer heroes={heroes} onHeroCardClick={onHeroCardClick} />}
        </div>
    );
};

export default Home;
