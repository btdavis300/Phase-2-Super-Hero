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
            <button id="specs-favs">Add to Favorites</button>
            <button id="specs-back" onClick={onGoBack}>
                Back to Collection
            </button>
        </div>
    );
=======
  return (
    <div id="specs-image-container">
      <h4 id="specs-titles">{featuredHero.name}</h4>
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
      <img src={featuredHero.images.lg} alt="" id="specs-images"></img>
      <div id="appearance-div">
        <div>
          <strong> - APPEARANCE - </strong>
          <br></br>
          <strong>Gender: </strong>
          {featuredHero.appearance.gender}
        </div>
        <div>
          <strong>Race: </strong>
          {featuredHero.appearance.race}
        </div>
        <div>
          <strong>Height: </strong>
          {featuredHero.appearance.height[0]}
        </div>
        <div>
          <strong>Weight: </strong>
          {featuredHero.appearance.weight[0]}
        </div>
        <div>
          <strong>Eye Color: </strong>
          {featuredHero.appearance.eyeColor}
        </div>
        <div>
          <strong>Hair Color: </strong>
          {featuredHero.appearance.hairColor}
        </div>
      </div>
      <div id="biography-div">
        <div>
          <strong> - BIOGRAPHY - </strong>
          <br></br>
          <strong>Full Name: </strong>
          {featuredHero.biography.fullName}
        </div>
        <div>
          <strong>Alter Egos: </strong>
          {featuredHero.biography.alterEgos}
        </div>
        <div>
          <strong>Aliases: </strong>
          {featuredHero.biography.aliases[0]}
        </div>
        <div>
          <strong>Place of Birth: </strong>
          {featuredHero.biography.placeOfBirth}
        </div>
        <div>
          <strong>First Appearance: </strong>
          {featuredHero.appearance.firstAppearance}
        </div>
        <div>
          <strong>Publisher: </strong>
          {featuredHero.appearance.publisher}
        </div>
        <div>
          <strong>Alignment: </strong>
          {featuredHero.appearance.alignment}
        </div>
      </div>
      <div id="work-div">
        <div>
          <strong> - WORK - </strong>
          <br></br>
          <strong>Occupation: </strong>
          {featuredHero.work.occupation}
        </div>
        <div>
          <strong>Base: </strong>
          {featuredHero.work.base}
        </div>
      </div>
      <div id="connections-div">
        <div>
          <strong> - CONNECTIONS - </strong>
          <br></br>
          <strong>Group Affiliation: </strong>
          {featuredHero.connections.groupAffiliation}
        </div>
        <div>
          <strong>Relatives: </strong>
          {featuredHero.connections.relatives}
        </div>
      </div>
      <div id="buttons-div">
        <button id="specs-favs">Add to Favorites</button>
        <button id="specs-back" onClick={onGoBack}>
          Back to Collection
        </button>
      </div>
    </div>
  );
>>>>>>> e8c6bfd0034f899ca19ce14ae04994b3c50c9167
}

export default HeroSpecs;
