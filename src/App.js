import React, { useState, useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Categories from "./components/Categories";
import Favorites from "./components/Favorites";
import NavBar from "./components/NavBar";
import Search from "./components/Search";

function App() {
  const [heroes, setHeroes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/superheroes")
      .then((res) => res.json())
      .then((imageData) => {
        setHeroes(imageData);
        console.log(imageData);
      });
  }, []);

  const displayedHeroes = heroes.filter((hero) => {
    return hero.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div id="container">
      <NavBar onSearchChange={setSearchTerm} searchTerm={searchTerm} />
      <div id="nav">
        <Switch>
          <Route exact path="/">
            <Home heroes={displayedHeroes} />
          </Route>
          <Route exact path="/categories">
            <Categories />
          </Route>
          <Route exact path="/favorites">
            <Favorites />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
