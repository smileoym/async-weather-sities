import React from "react";
import PropTypes from "prop-types";
// import GetApi from "../GetApi/GetApi.js";

const Weather = (props) => {
  return (
    <div>
      <p>⏰температура: {props.temp}</p>
      <p>🌾страна: {props.country}</p>
      <p>🌾город: {props.city}</p>
      <p>🌾восход солнца: {props.sunrise}</p>
      <p>🌾заход солнца: {props.sunset}</p>
    </div>
  );
};

Weather.propTypes = {};

export default Weather;
