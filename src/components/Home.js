import React from "react";
import HeroContainer from "./HeroContainer";

const Home = ({ heroes }) => {
  return (
    <div>
      <HeroContainer heroes={heroes} />
    </div>
  );
};

export default Home;
