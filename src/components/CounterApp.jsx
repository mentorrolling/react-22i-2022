import React, { useState } from "react";

const CounterApp = () => {
  let counter = 0;
  //Hooks: funciones que me permiten acceder a características especiales de React
  //   const state = [23, () => console.log("Hola")];
  //   const [num1, setNum1] = state;
  //   console.log(num1);
  //   setNum1();

  const [count, setCount] = useState(0);

  const counterMas = () => {
    // counter = counter + 1;
    // console.log(counter);
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Contador</h1>
      <h3>{count}</h3>
      <button onClick={counterMas}>+1</button>
    </div>
  );
};

export default CounterApp;
