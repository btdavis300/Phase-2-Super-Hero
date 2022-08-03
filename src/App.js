import React, { useState, useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import MakeYourOwn from "./components/MakeYourOwn";
import Favorites from "./components/Favorites";
import NavBar from "./components/NavBar";
import SortBy from "./components/SortBy.js";

function App() {
  const [heroes, setHeroes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isClicked, setIsClicked] = useState(false)

  useEffect(() => {
    fetch("http://localhost:3000/superheroes/")
      .then((res) => res.json())
      .then((heroData) => {
        setHeroes(heroData);
      });
  }, []);

  const displayedHeroes = heroes.filter((hero) => {
    return hero.name.toLowerCase().includes(searchTerm.toLowerCase());
  });


  function handleAddHero(newHero) {
    setHeroes([newHero, ...heroes]);
  }

  return (
    <div id="container">
      <NavBar onSearchChange={setSearchTerm} searchTerm={searchTerm} />
      <div id="nav">
        <Switch>
          <Route exact path="/">
            <Home heroes={displayedHeroes} isClicked={isClicked} setIsClicked={setIsClicked} />
          </Route>
          <Route exact path="/MYO">
            <MakeYourOwn onAddHero={handleAddHero} />
          </Route>
          <Route exact path="/favorites">
            <Favorites
              heroes={heroes}
            />
          </Route>
          <Route exact path="/sortby">
            <SortBy
              heroes={heroes}
              setHeroes={setHeroes}
            />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
