import React, { useState, useEffect } from "react";
import TestCmp from "./components/TestCmp";
import "./App.css";

function App() {
  const [test, setTest] = useState([]);

  useEffect(() => {
    fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
      .then((res) => res.json())
      .then((data) => {
        setTest(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      <TestCmp test={test} />
    </div>
  );
}

export default App;
