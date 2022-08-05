import React, { useState, useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import MakeYourOwn from "./components/MakeYourOwn";
import Favorites from "./components/Favorites";
import NavBar from "./components/NavBar";
import SortBy from "./components/SortBy.js";
import HeroSpecs from "./components/HeroSpecs";

function App() {
  const [heroes, setHeroes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [featuredHero, setFeaturedHero] = useState({});
  const [showHeroSpecs, setShowHeroSpecs] = useState(false);
  const [favHeroes, setFavHeroes] = useState([]);
  const [MYOHeroes, setMYOHeroes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/superheroes/")
      .then((res) => res.json())
      .then((heroData) => {
        setHeroes(heroData);
        setMYOHeroes(heroData);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/favorites/")
      .then((res) => res.json())
      .then((favArr) => {
        setFavHeroes(favArr);
      });
  }, []);

  const displayedHeroes = heroes.filter((hero) => {
    return hero.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  function handleAddHero(newHero) {
    setHeroes([newHero, ...heroes]);
  }

  function handleHomeClick() {
    setShowHeroSpecs(false)
  }

  function handleHeroCardClick(featuredHero) {
    setFeaturedHero(featuredHero);
    setShowHeroSpecs(true);
  }

  function handleGoBack() {
    setShowHeroSpecs((showHeroSpecs) => !showHeroSpecs);
  }

  function handleMYOHeroes(MYOHero) {
    setMYOHeroes([...MYOHeroes, MYOHero]);
  }

  function handleFavorites(clickedHero) {
    const favHeroIndex = favHeroes.findIndex(
      (hero) => hero.id === clickedHero.id
    );
    if (favHeroIndex < 0) {
      fetch("http://localhost:3000/favorites/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ ...clickedHero, favorite: true }),
      })
        .then((r) => r.json())
        .then(setFavHeroes([...favHeroes, clickedHero]));
      console.log(favHeroes);
    } else {
      alert(clickedHero.name + " is already in your Favorites");
    }
  }

  function handleRemoveFavorite(removeHero) {
    fetch(`http://localhost:3000/favorites/${removeHero.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(
        setFavHeroes(favHeroes.filter((hero) => hero.id !== removeHero.id))
      );
  }

  return (
    <div id="container">
      <NavBar
        onSearchChange={setSearchTerm}
        searchTerm={searchTerm}
        onHomeClick={handleHomeClick}
      />
      <div id="nav">
        <Switch>
          <Route exact path="/">
            <Home
              heroes={displayedHeroes}
              featuredHero={featuredHero}
              showHeroSpecs={showHeroSpecs}
              onHeroCardClick={handleHeroCardClick}
              onGoBack={handleGoBack}
              onFavoriteHero={handleFavorites}
            />
          </Route>
          <Route exact path="/MYO">
            <MakeYourOwn
              onAddHero={handleAddHero}
              MYOHeroes={MYOHeroes}
              onFavoriteHero={handleFavorites}
              onMYOHeroes={handleMYOHeroes}
            />
          </Route>
          <Route exact path="/favorites">
            <Favorites
              heroes={favHeroes}
              onRemoveFavoriteHero={handleRemoveFavorite}
              showHeroSpecs={showHeroSpecs}
              onGoBack={handleGoBack}
              onFavoriteHero={handleFavorites}
              featuredHero={featuredHero}
              onHeroCardClick={handleHeroCardClick}
            />
          </Route>
          <Route exact path="/sortby">
            {showHeroSpecs ?
              <HeroSpecs
                featuredHero={featuredHero}
                showHeroSpecs={showHeroSpecs}
                onGoBack={handleGoBack}
                onFavoriteHero={handleFavorites}
              />
              : <SortBy
                heroes={displayedHeroes}
                setHeroes={setHeroes}
                onHeroCardClick={handleHeroCardClick}
                onFavoriteHero={handleFavorites}
              />}
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
