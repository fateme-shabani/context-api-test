import React, { useRef, useContext } from "react";
import { MyContext } from "../myContext/context";

const Form = () => {
  const [products, setproducts] = useContext(MyContext);
  const name = useRef("");
  const price = useRef(0);
  const ClickHandler = (e) => {
    e.preventDefault();
    setproducts([
      ...products,
      { id: new Date(), name: name.current.value, price: price.current.value },
    ]);
  };
  return (
    <div>
      <form onSubmit={ClickHandler}>
        <input type="text" ref={name} />
        <input type="number" ref={price} />
        <button type="submit">Click Me</button>
      </form>
    </div>
  );
};

export default Form;
