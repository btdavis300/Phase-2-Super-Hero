import React from "react";

function HeroCard({ hero }) {
  return (
    <div id="image-container">
      <h4 id="titles">{hero.name}</h4>
      <p></p>
      <img src={hero.images.sm} alt={hero.id} id="images"></img>
    </div>
  );
}

export default HeroCard;
