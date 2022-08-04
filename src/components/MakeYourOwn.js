import React, { useState } from "react";
import HeroCard from "./HeroCard";

function MakeYourOwn({ onAddHero, MYOHeroes, onFavoriteHero, onMYOHeroes }) {
  const [name, setName] = useState("");
  const [sm, setSm] = useState("");
  const [intelligence, setIntelligence] = useState("");
  const [strength, setStrength] = useState("");
  const [speed, setSpeed] = useState("");
  const [durability, setDurability] = useState("");
  const [power, setPower] = useState("");
  const [combat, setCombat] = useState("");

  const filteredMYOHeroes = MYOHeroes.filter((hero) => hero.id >= 732);
  const displayMYOHeroes = filteredMYOHeroes.map((hero) => {
    return (
      <HeroCard key={hero.id} hero={hero} onFavoriteHero={onFavoriteHero} />
    );
  });

  function handleSubmit(e) {
    const newMYOHero = {
      name: name,
      images: {
        sm: sm,
      },
      powerstats: {
        intelligence: intelligence,
        strength: strength,
        speed: speed,
        durability: durability,
        power: power,
        combat: combat,
      },
    };
    fetch("http://localhost:3000/superheroes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMYOHero),
    })
      .then((res) => res.json())
      .then((newHero) => onAddHero(newHero));
    onMYOHeroes(newMYOHero);
  }

  return (
    <div className="new-bot-form">
      <h2 id="create-your-own">- Create Your Own Hero! -</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="image"
          placeholder="Image"
          value={sm}
          onChange={(e) => setSm(e.target.value)}
        />
        <input
          type="text"
          name="intelligence"
          placeholder="Intelligence"
          value={intelligence}
          onChange={(e) => setIntelligence(e.target.value)}
        />
        <input
          type="text"
          name="strength"
          placeholder="Strength"
          value={strength}
          onChange={(e) => setStrength(e.target.value)}
        />
        <input
          type="text"
          name="speed"
          placeholder="Speed"
          value={speed}
          onChange={(e) => setSpeed(e.target.value)}
        />
        <input
          type="text"
          name="durability"
          placeholder="Durability"
          value={durability}
          onChange={(e) => setDurability(e.target.value)}
        />
        <input
          type="text"
          name="power"
          placeholder="Power"
          value={power}
          onChange={(e) => setPower(e.target.value)}
        />
        <input
          type="text"
          name="combat"
          placeholder="Combat"
          value={combat}
          onChange={(e) => setCombat(e.target.value)}
        />
        <button id="submit-button" type="submit">
          Add New Hero
        </button>
      </form>
      <div id="image-field">{displayMYOHeroes}</div>
    </div>
  );
}

export default MakeYourOwn;
