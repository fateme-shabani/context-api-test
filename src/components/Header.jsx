import React, { useContext } from "react";
import { MyContext } from "../myContext/context";
const Header = () => {
  const [products, setproducts] = useContext(MyContext);
  return (
    <div>
      <h2>Product Count :{products.length}</h2>
    </div>
  );
};

export default Header;
