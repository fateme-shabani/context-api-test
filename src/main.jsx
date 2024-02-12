import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Myprovider } from "./myContext/myContext.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <Myprovider value={}>
    <App />
  // </Myprovider>
);
