import React, { useState } from "react";

function MakeYourOwn({ onAddHero }) {
  const [name, setName] = useState("");
  const [sm, setSm] = useState("");
  const [intelligence, setIntelligence] = useState("");
  const [strength, setStrength] = useState("");
  const [speed, setSpeed] = useState("");
  const [durability, setDurability] = useState("");
  const [power, setPower] = useState("");
  const [combat, setCombat] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/superheroes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
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
      }),
    })
      .then((res) => res.json())
      .then((newHero) => onAddHero(newHero));
  }

  return (
    <div className="new-bot-form">
      <h2>New Hero</h2>
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
        <button type="submit">Add New Hero</button>
      </form>
    </div>
  );
}

export default MakeYourOwn;
