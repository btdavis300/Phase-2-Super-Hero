import React from "react";
import combatIcon from "../assets/combat.png";
import durabilityIcon from "../assets/durability.png";
import intelligenceIcon from "../assets/intelligence.png";
import powerIcon from "../assets/power.png";
import speedIcon from "../assets/speed.png";
import strengthIcon from "../assets/strength.png";

<<<<<<< HEAD
function HeroCard({ hero }) {
=======
function HeroCard({ hero, handleFavorites, favClicked, setFavClicked }) {
  const { intelligence, strength, speed, durability, power, combat } = hero.powerstats

>>>>>>> test
  function displayHero() {
    console.log(hero.images.sm);
  }
<<<<<<< HEAD
=======

  function onFavorite(e) {
    e.stopPropagation()
    setFavClicked((favClicked) => !favClicked)
    console.log(favClicked)
    handleFavorites(hero)

  }

>>>>>>> test
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
<<<<<<< HEAD
      <img src={hero.images.sm} alt={hero.images.sm} id="images"></img>
=======
      <img src={hero.images.sm} alt='' id="images"></img>
      <button onClick={onFavorite}>{(hero.favorite ? "Remove from Favorites" : "Add to Favorites")}</button>
>>>>>>> test
    </div>
  );
}

export default HeroCard;
