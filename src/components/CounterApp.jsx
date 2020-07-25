import React from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {
  const onAdd = (e) => {
    console.log(e);
  };
  return (
    <div>
      <h1>CounterApp</h1>
      <h2>{value}</h2>

      <button onClick={onAdd}>+1</button>
    </div>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};

export default CounterApp;
