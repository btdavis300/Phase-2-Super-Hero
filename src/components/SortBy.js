import React, { useState } from "react";
import HeroCard from "./HeroCard";

function SortBy({ heroes, setHeroes, isClicked }) {
  const [intelOrder, setIntelOrder] = useState(true);
  const [strengthOrder, setStrengthOrder] = useState(true);
  const [speedOrder, setSpeedOrder] = useState(true);
  const [durabilityOrder, setDurabilityOrder] = useState(true);
  const [powerOrder, setPowerOrder] = useState(true);
  const [combatOrder, setCombatOrder] = useState(true);

  const heroesArr = heroes.map((hero) => {
    return <HeroCard key={hero.id} hero={hero} />
  })

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
        Sort by Strength
      </button>
      <button
        id="speed"
        onClick={(e) => onSort(e, "speed", speedOrder, setSpeedOrder)}
      >
        Sort by Speed
      </button>
      <button
        id="durability"
        onClick={(e) =>
          onSort(e, "durability", durabilityOrder, setDurabilityOrder)
        }
      >
        Sort by Durability
      </button>
      <button
        id="power"
        onClick={(e) =>
          onSort(e, "power", powerOrder, setPowerOrder)
        }
      >
        Sort by Power
      </button>
      <button
        id="combat"
        onClick={(e) =>
          onSort(e, "combat", combatOrder, setCombatOrder)
        }
      >
        Sort by Combat
      </button>

      <div>{heroesArr}</div>
    </div>
  );
}

export default SortBy;
