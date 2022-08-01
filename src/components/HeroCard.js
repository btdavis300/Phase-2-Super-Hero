import React from "react";
import combatIcon from '../assets/combat.png';
import durabilityIcon from '../assets/durability.png';
import intelligenceIcon from '../assets/intelligence.png';
import powerIcon from '../assets/power.png';
import speedIcon from '../assets/speed.png';
import strengthIcon from '../assets/strength.png';

function HeroCard({ hero }) {
  const { intelligence, strength, speed, durability, power, combat } = hero.powerstats
  function displayHero() {
    console.log(hero)
  }

  return (
    <div id="image-container" onClick={displayHero}>
      <h4 id="titles">{hero.name}</h4>
      <div id="hero-powerstats">
        <ul>
          <li> <img className="stats-icons" src={intelligenceIcon} alt="intelligence" /> {intelligence} </li>
          <li> <img className="stats-icons" src={strengthIcon} alt="strength" /> {strength} </li>
          <li> <img className="stats-icons" src={speedIcon} alt="speed" /> {speed} </li>
          <li> <img className="stats-icons" src={durabilityIcon} alt="durability" /> {durability} </li>
          <li> <img className="stats-icons" src={powerIcon} alt="power" /> {power} </li>
          <li> <img className="stats-icons" src={combatIcon} alt="combat" /> {combat} </li>
        </ul>
      </div>
      <img src={hero.images.sm} alt={hero.id} id="images"></img>
    </div>
  );
}

export default HeroCard;
