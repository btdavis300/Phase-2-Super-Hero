import React, { useState, useEffect } from "react";
import TestCmp from "./components/TestCmp";
import "./App.css";
import Form from "./components/Form";

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
      <h1 id="top">- SUPERHEROES -</h1>
      <Form onSearchChange={setSearchTerm} searchTerm={searchTerm} />
      <TestCmp images={displayedImages} />
    </div>
  );
}

export default App;
