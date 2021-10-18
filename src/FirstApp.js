import React from "react";
import PropTypes from "prop-types";

const FirstApp = ({ greeting, subtitle }) => {
  return (
    <>
      <h1>{greeting}</h1>
      <p>{subtitle}</p>
      <span id="subtitle" className="subtitle">{subtitle}</span>
    </>
  );
};

FirstApp.propTypes = {
  greeting: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

FirstApp.defaultProps = {
  subtitle: "Subtitle",
};

export default FirstApp;
