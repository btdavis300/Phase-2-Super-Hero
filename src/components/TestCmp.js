import React from "react";
import TestRndr from "./TestRndr";

function TestCmp({ test }) {
  const testArr = test.map((ins) => {
    return <TestRndr key={ins.id} ins={ins} />;
  });
  return <div>{testArr}</div>;
}

export default TestCmp;
