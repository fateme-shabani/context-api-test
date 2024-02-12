import React from "react";
import { Myconsumer } from "../myContext/myContext";

const A2 = () => {
  return (
    <>
      <h1>A2</h1>
      <Myconsumer>
        {(eshopName) => {
          return <h2>{eshopName.name}</h2>;
        }}
      </Myconsumer>
    </>
  );
};

export default A2;
