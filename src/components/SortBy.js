import React from "react";
import HeroCard from "./HeroCard";

function SortBy({ heroes, setHeroes }) {




  const heroesArr = heroes.map((hero) => {
    return <HeroCard key={hero.id} hero={hero} />
  })

  function onSort(e) {
    const category = e.target.id
    console.log(category)
    const sortedCategory = heroes.sort(function (a, b) {
      return b[category] - a[category];
    });
    setHeroes([...sortedCategory]);
  }

  return (
    <div
      id="button-container"
    >
      <div>
        <button id="intelligence" onClick={onSort}>
          Sort by Intelligence
        </button>
        <button id="strength" onClick={onSort}>
          Sort by Strength
        </button>
        <button id="speed" onClick={onSort}>
          Sort by Speed
        </button>
        <button id="durability" onClick={onSort}>
          Sort by Durability
        </button>
        <button id='power' onClick={onSort}> Sort By Power
        </button>
        <button id='combat' onClick={onSort}> Sort By Combat
        </button>
      </div>
      <div>{heroesArr}</div>
    </div>
  );
}

export default SortBy;
