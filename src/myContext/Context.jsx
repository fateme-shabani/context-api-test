import { createContext,useState } from "react";

export const MyContext = createContext();

export const MyProvider = (props) => {
    const [products, setproducts] = useState([
        {id:1,name:'book',price:14000},
        {id:2,name:'pencel',price:1000},
        {id:3,name:'lable',price:500},
        {id:4,name:'highlight',price:500}
    ])
  return (
    <MyContext.Provider value={[products, setproducts]}>
      {props.children}
    </MyContext.Provider>
  );
};
