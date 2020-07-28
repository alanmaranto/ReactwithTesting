import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);
  const onAdd = (e) => {
    setCounter(counter + 1);
  };
  const onSubstract = (e) => {
    setCounter(counter - 1);
  };

  const onReset = (e) => {
    setCounter(value);
  };
  return (
    <div>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>

      <button onClick={onAdd}>+1</button>
      <button onClick={onReset}>Reset</button>
      <button onClick={onSubstract}>-1</button>
    </div>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};

export default CounterApp;
