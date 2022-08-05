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
    <div>
      <div id="new-bot-form">
        <h1 className="page-title">MAKE YOUR OWN HERO</h1>
        <form onSubmit={handleSubmit}>
          <div id="name-image-form">
            <section className="input-box">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </section>
            <section className="input-box">
              <label>Image</label>
              <input
                type="text"
                name="image"
                placeholder="Image"
                value={sm}
                onChange={(e) => setSm(e.target.value)}
              />
            </section>
          </div>
          <div id="first-three-specs-form">
            <section className="input-box">
              <label>Intelligence</label>
              <input
                type="text"
                name="intelligence"
                placeholder="Intelligence"
                value={intelligence}
                onChange={(e) => setIntelligence(e.target.value)}
              />
            </section>
            <section className="input-box">
              <label>Strength</label>
              <input
                type="text"
                name="strength"
                placeholder="Strength"
                value={strength}
                onChange={(e) => setStrength(e.target.value)}
              />
            </section>
            <section className="input-box">
              <label>Speed</label>
              <input
                type="text"
                name="speed"
                placeholder="Speed"
                value={speed}
                onChange={(e) => setSpeed(e.target.value)}
              />
            </section>
          </div>
          <div id="second-three-specs-form">
            <section className="input-box">
              <label>Durability</label>
              <input
                type="text"
                name="durability"
                placeholder="Durability"
                value={durability}
                onChange={(e) => setDurability(e.target.value)}
              />
            </section>
            <section className="input-box">
              <label>Power</label>
              <input
                type="text"
                name="power"
                placeholder="Power"
                value={power}
                onChange={(e) => setPower(e.target.value)}
              />
            </section>
            <section className="input-box">
              <label>Combat</label>
              <input
                type="text"
                name="combat"
                placeholder="Combat"
                value={combat}
                onChange={(e) => setCombat(e.target.value)}
              />
            </section>
          </div>
          <button id="submit-button" type="submit">
            Add New Hero
          </button>

        </form>
      </div>
      <div id="image-field">{displayMYOHeroes}</div>
    </div>
  );
}

export default MakeYourOwn;
