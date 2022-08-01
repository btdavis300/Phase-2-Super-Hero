import React from "react"
import HeroContainer from "./HeroContainer";


const Home = ({ images }) => {

    return (
        <div>
            <HeroContainer images={images} />
        </div>
    );
};

export default Home;