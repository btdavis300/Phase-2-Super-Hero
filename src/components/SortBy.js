import React, { useState } from "react";
import HeroCard from "./HeroCard";

function SortBy({ heroes, setHeroes, isClicked }) {
  const [intelOrder, setIntelOrder] = useState(true);
  const [strengthOrder, setStrengthOrder] = useState(true);
  const [speedOrder, setSpeedOrder] = useState(true);
  const [durabilityOrder, setDurabilityOrder] = useState(true);

  const heroesArr = heroes.map((hero) => {
    return <HeroCard key={hero.id} hero={hero} />;
  });

  function onSort(e, attr, order, setOrder) {
    e.preventDefault();
    const sortedCategory = heroes.sort(function (a, b) {
      return order
        ? b.powerstats[attr] - a.powerstats[attr]
        : a.powerstats[attr] - b.powerstats[attr];
    });
    setOrder(!order);
    setHeroes([...sortedCategory]);
  }

  return (
    <div
      id="button-container"
      style={{ display: isClicked === true ? "none" : "" }}
    >
      <button
        id="intelligence"
        onClick={(e) => onSort(e, "intelligence", intelOrder, setIntelOrder)}
      >
        Sort by Intelligence
      </button>
      <button
        id="strength"
        onClick={(e) => onSort(e, "strength", strengthOrder, setStrengthOrder)}
      >
        strength
      </button>
      <button
        id="speed"
        onClick={(e) => onSort(e, "speed", speedOrder, setSpeedOrder)}
      >
        speed
      </button>
      <button
        id="durability"
        onClick={(e) =>
          onSort(e, "durability", durabilityOrder, setDurabilityOrder)
        }
      >
        durability
      </button>

      <div>{heroesArr}</div>
    </div>
  );
}

export default SortBy;
