import React, { useState, useEffect } from "react";
import HeroContainer from "./components/HeroContainer";
import Search from "./components/Search";
import NavBar from "./components/NavBar";
import "./App.css";

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
      <NavBar onSearchChange={setSearchTerm} searchTerm={searchTerm} />
      {/* <h1 id="top">- SUPERHEROES -</h1> */}
      {/* <Search onSearchChange={setSearchTerm} searchTerm={searchTerm} /> */}
      <HeroContainer images={displayedImages} />
    </div>
  );
}

export default App;
