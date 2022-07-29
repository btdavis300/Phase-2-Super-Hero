import React from "react";

function TestRndr({ ins }) {
  return (
    <div>
      <h1>{ins.name}</h1>
      <img src={ins.images.lg} alt={ins.id} id="images"></img>
      <p>{ins.work.occupation}</p>
    </div>
  );
}

export default TestRndr;
