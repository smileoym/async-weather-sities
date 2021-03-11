import React from "react";
import PropTypes from "prop-types";

const Form = (props) => {
  return (
    <form onSubmit={props.weatherMethod}>
      <input type="text" name="city" placeholder="City" />
      <button>Получить погоду</button>
    </form>
  );
};

Form.propTypes = {};

export default Form;
