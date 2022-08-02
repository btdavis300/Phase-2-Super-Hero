import React, { useState, useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import MakeYourOwn from "./components/MakeYourOwn";
import Favorites from "./components/Favorites";
import NavBar from "./components/NavBar";
import Categories from "./components/Categories";

function App() {
  const [heroes, setHeroes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [favClicked, setFavClicked] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/superheroes")
      .then((res) => res.json())
      .then((heroArr) => {
        setHeroes(heroArr.map((hero) => {
          return { ...hero, favorite: false }
        }));
        console.log(heroArr);
      });
  }, []);

  const displayedHeroes = heroes.filter((hero) => {
    return hero.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  function handleFavorites(clickedHero) {
    fetch(`http://localhost:3000/superheroes/${clickedHero.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ ...clickedHero, favorite: favClicked }),
    })
    const updatedHeroes = heroes.map((hero) => {
      if (hero.id === clickedHero.id) return { ...hero, favorite: favClicked };
      return hero;
    });
    setHeroes(updatedHeroes)
  }

  return (
    <div id="container">
      <NavBar onSearchChange={setSearchTerm} searchTerm={searchTerm} />
      <div id="nav">
        <Switch>
          <Route exact path="/">
            <Home
              heroes={displayedHeroes}
              handleFavorites={handleFavorites}
              favClicked={favClicked}
              setFavClicked={setFavClicked} />
          </Route>
          <Route exact path="/MYO">
            <MakeYourOwn />
          </Route>
          <Route exact path="/favorites">
            <Favorites
              heroes={heroes}
              favClicked={favClicked}
              setFavClicked={setFavClicked}
              handleFavorites={handleFavorites}
            />
          </Route>
          <Route exact path="/categories">
            <Categories />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
