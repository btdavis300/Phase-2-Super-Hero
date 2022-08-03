import React from "react";
import combatIcon from "../assets/combat.png";
import durabilityIcon from "../assets/durability.png";
import intelligenceIcon from "../assets/intelligence.png";
import powerIcon from "../assets/power.png";
import speedIcon from "../assets/speed.png";
import strengthIcon from "../assets/strength.png";

function HeroSpecs({ showHeroSpecs, featuredHero, onGoBack }) {
<<<<<<< HEAD
    return (
        <div id="image-container">
            <h4 id="titles">{featuredHero.name}</h4>
            <div id="featuredHero-powerstats">
                <ul>
                    <li>
                        {" "}
                        <img
                            className="stats-icons"
                            src={intelligenceIcon}
                            alt="intelligence"
                        />{" "}
                        {featuredHero.powerstats.intelligence}{" "}
                    </li>
                    <li>
                        {" "}
                        <img
                            className="stats-icons"
                            src={strengthIcon}
                            alt="strength"
                        />{" "}
                        {featuredHero.powerstats.strength}{" "}
                    </li>
                    <li>
                        {" "}
                        <img className="stats-icons" src={speedIcon} alt="speed" />{" "}
                        {featuredHero.powerstats.speed}{" "}
                    </li>
                    <li>
                        {" "}
                        <img
                            className="stats-icons"
                            src={durabilityIcon}
                            alt="durability"
                        />{" "}
                        {featuredHero.powerstats.durability}{" "}
                    </li>
                    <li>
                        {" "}
                        <img className="stats-icons" src={powerIcon} alt="power" />{" "}
                        {featuredHero.powerstats.power}{" "}
                    </li>
                    <li>
                        {" "}
                        <img className="stats-icons" src={combatIcon} alt="combat" />{" "}
                        {featuredHero.powerstats.combat}{" "}
                    </li>
                </ul>
            </div>
            <img src={featuredHero.images.lg} alt="" id="images"></img>
            <button>Add to Favorites</button>
            <button onClick={onGoBack}>Back to Collection</button>
        </div>
    );
=======
  return (
    <div id="image-container">
      <h4 id="titles">{featuredHero.name}</h4>
      <div id="featuredHero-powerstats">
        <ul>
          <li>
            {" "}
            <img
              className="stats-icons"
              src={intelligenceIcon}
              alt="intelligence"
            />{" "}
            {featuredHero.powerstats.intelligence}{" "}
          </li>
          <li>
            {" "}
            <img
              className="stats-icons"
              src={strengthIcon}
              alt="strength"
            />{" "}
            {featuredHero.powerstats.strength}{" "}
          </li>
          <li>
            {" "}
            <img className="stats-icons" src={speedIcon} alt="speed" />{" "}
            {featuredHero.powerstats.speed}{" "}
          </li>
          <li>
            {" "}
            <img
              className="stats-icons"
              src={durabilityIcon}
              alt="durability"
            />{" "}
            {featuredHero.powerstats.durability}{" "}
          </li>
          <li>
            {" "}
            <img className="stats-icons" src={powerIcon} alt="power" />{" "}
            {featuredHero.powerstats.power}{" "}
          </li>
          <li>
            {" "}
            <img className="stats-icons" src={combatIcon} alt="combat" />{" "}
            {featuredHero.powerstats.combat}{" "}
          </li>
        </ul>
      </div>
      <img src={featuredHero.images.lg} alt="" id="images"></img>
      <button id="specs-favs">Add to Favorites</button>
      <button id="specs-back" onClick={onGoBack}>
        Back to Collection
      </button>
    </div>
  );
>>>>>>> b5e8af3e0dc34399b6bd5e2255eae5c9a73036aa
}

export default HeroSpecs;
