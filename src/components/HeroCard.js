import React from "react";
import combatIcon from "../assets/combat.png";
import durabilityIcon from "../assets/durability.png";
import intelligenceIcon from "../assets/intelligence.png";
import powerIcon from "../assets/power.png";
import speedIcon from "../assets/speed.png";
import strengthIcon from "../assets/strength.png";

function HeroCard({ hero, handleFavorites, favClicked, setFavClicked }) {
  function displayHero() {
    console.log(hero.images.sm);
  }

  function onFavorite(e) {
    e.stopPropagation();
    setFavClicked((favClicked) => !favClicked);
    handleFavorites(hero);
  }

  return (
    <div id="image-container" onClick={displayHero}>
      <h4 id="titles">{hero.name}</h4>
      <div id="hero-powerstats">
        <ul>
          <li>
            {" "}
            <img
              className="stats-icons"
              src={intelligenceIcon}
              alt="intelligence"
            />{" "}
            {hero.powerstats.intelligence}{" "}
          </li>
          <li>
            {" "}
            <img
              className="stats-icons"
              src={strengthIcon}
              alt="strength"
            />{" "}
            {hero.powerstats.strength}{" "}
          </li>
          <li>
            {" "}
            <img className="stats-icons" src={speedIcon} alt="speed" />{" "}
            {hero.powerstats.speed}{" "}
          </li>
          <li>
            {" "}
            <img
              className="stats-icons"
              src={durabilityIcon}
              alt="durability"
            />{" "}
            {hero.powerstats.durability}{" "}
          </li>
          <li>
            {" "}
            <img className="stats-icons" src={powerIcon} alt="power" />{" "}
            {hero.powerstats.power}{" "}
          </li>
          <li>
            {" "}
            <img className="stats-icons" src={combatIcon} alt="combat" />{" "}
            {hero.powerstats.combat}{" "}
          </li>
        </ul>
      </div>
      <img src={hero.images.sm} alt="" id="images"></img>
      <button onClick={onFavorite}>
        {hero.favorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
}

export default HeroCard;
