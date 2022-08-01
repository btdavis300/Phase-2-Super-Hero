import React from "react";

function TestRndr({ image }) {
  return (
    <div id="image-container">
      <h4 id="titles">{image.name}</h4>
      <img src={image.images.sm} alt={image.id} id="images"></img>
    </div>
  );
}

export default TestRndr;
