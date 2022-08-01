import React, { useState, useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Categories from "./components/Categories";
import Favorites from "./components/Favorites";
import NavBar from "./components/NavBar";
import Search from "./components/Search";

function App() {
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/superheroes")
      .then((res) => res.json())
      .then((imageData) => {
        setImages(imageData);
        console.log(imageData);
      });
  }, []);

  const displayedImages = images.filter((image) => {
    return image.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div id="container">
      <NavBar
        images={displayedImages}
        onSearchChange={setSearchTerm}
        searchTerm={searchTerm}
      />
      <div id="nav">
        <Switch>
          <Route exact path="/">
            <Home images={displayedImages} />
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
