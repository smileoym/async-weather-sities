import React from "react";
import PropTypes from "prop-types";
import Form from "../Form/Form";

const API_KEY = "e7dce04f58fdb5ea4bf51f0d25ea8ed3";

const GetApi = () => {
  const gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_url = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    const data = await api_url.json();
    console.log(data);
  };
  return (
    <div>
      {" "}
      <Form weatherMethod={gettingWeather} />
    </div>
  );
};

GetApi.propTypes = {};

export default GetApi;
