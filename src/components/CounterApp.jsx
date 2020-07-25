import React from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {
  return (
    <div>
      <h1>CounterApp</h1>
      <h2>{value}</h2>
    </div>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};

export default CounterApp;
