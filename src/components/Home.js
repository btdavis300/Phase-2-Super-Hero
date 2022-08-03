import React from "react";
import HeroContainer from "./HeroContainer";
import HeroSpecs from "./HeroSpecs"

const Home = ({ heroes, isClicked, setIsClicked }) => {
    return (
        <div style={{
            display: isClicked === true ? <HeroSpecs /> : <HeroContainer
                heroes={heroes} />
        }}>

        </div>
    );
};

export default Home;
