import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; //importando el componente App
import CounterApp from "./components/CounterApp";
import "./index.css";

// let mensaje = <h1>Hola RollingCoders!! 😎</h1>;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <CounterApp initialState={10} />
    {/* <CounterApp initialState={5} /> */}
  </React.StrictMode>
);
