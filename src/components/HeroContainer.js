import React from "react";
import HeroCard from "./HeroCard";

function HeroContainer({ images }) {
  const imagesArr = images.map((image) => {
    return <HeroCard key={image.id} image={image} />;
  });
  return <div id="image-field">{imagesArr}</div>;
}

export default HeroContainer;
