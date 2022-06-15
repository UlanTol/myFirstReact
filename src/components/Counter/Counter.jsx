import React, { useState } from "react";

const Counter = () => {
  let [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }
  function decrement() {
    setCounter(counter - 1);
  }
  return (
    <div style={{ margin: "auto" }}>
      <h1>Counter {counter}</h1>
      <button onClick={increment} className="btn btn-success">
        +
      </button>
      <button onClick={decrement} className="btn btn-danger">
        -
      </button>
    </div>
  );
};

export default Counter;
