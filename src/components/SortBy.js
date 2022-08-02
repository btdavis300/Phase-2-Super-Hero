import React from "react";
import HeroCard from "./HeroCard";

function SortBy({ heroes, setHeroes, isClicked }) {
  // const [selectedCategory, setSelectedCategory] = useState();
  const heroesArr = heroes.map((hero) => {
    return <HeroCard key={hero.id} hero={hero} />;
  });

  function onSort(event) {
    const category = event.target.id;
    const sortedCategory = heroes.sort(function (a, b) {
      return b[category] - a[category];
    });
    setHeroes([...sortedCategory]);
  }

  return (
    <div
      id="button-container"
      style={{ display: isClicked === true ? "none" : "" }}
    >
      <select>
        <option id="gender" onClick={onSort}>
          Sort by Gender
        </option>
        <option id="height" onClick={onSort}>
          Sort by Height
        </option>
        <option id="weight" onClick={onSort}>
          Sort by Weight
        </option>
        <option id="eye-color" onClick={onSort}>
          Sort by Eye Color
        </option>
      </select>
      <div>{heroesArr}</div>
    </div>
  );
}

export default SortBy;
