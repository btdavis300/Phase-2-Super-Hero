import React from "react";
import HeroContainer from "./HeroContainer";

const Home = ({ heroes, handleFavorites, favClicked, setFavClicked }) => {
    return (
        <div>
            <HeroContainer
                heroes={heroes}
                handleFavorites={handleFavorites}
                favClicked={favClicked}
                setFavClicked={setFavClicked} />
        </div>
    );
};

export default Home;
