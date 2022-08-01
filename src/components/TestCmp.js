import React from "react";
import TestRndr from "./TestRndr";

function TestCmp({ images }) {
  const imagesArr = images.map((image) => {
    return <TestRndr key={image.id} image={image} />;
  });
  return <div id="image-field">{imagesArr}</div>;
}

export default TestCmp;
