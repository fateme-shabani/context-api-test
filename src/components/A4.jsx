import React from "react";
import { Myconsumer } from "../myContext/myContext";

const A4 = () => {
  return (
    <>
      <h1>A4</h1>
      <Myconsumer>
       {(test)=>{return <h2>{test.address}</h2>}} 
      </Myconsumer>
    </>
  );
};

export default A4;
