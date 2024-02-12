import { useState } from "react";
import "./App.css";
import A1 from "./components/A1";
import A2 from "./components/A2";
import A3 from "./components/A3";
import A4 from "./components/A4";
import Products from "./components/Products";
import Header from "./components/Header";
import { MyProvider } from "./myContext/context";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <A1 />
      <A2 />
      <A3 />
      <A4 /> */}
      <MyProvider>
        <Header />
        <Products />
      </MyProvider>
    </>
  );
}

export default App;
