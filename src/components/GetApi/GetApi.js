import React, { useState } from "react";
import PropTypes from "prop-types";
import Form from "../Form/Form";
import Weather from "../Weather.js";

const API_KEY = "e7dce04f58fdb5ea4bf51f0d25ea8ed3";

const initialWeather = {
  temp: "",
  city: "",
  country: "",
  sunrise: "",
  sunset: "",
};
const GetApi = (props) => {
  // const [temp, setTemp] = useState();
  // const [city, setCity] = useState();
  // const [country, setCountry] = useState();
  // const [sunrise, setSunrise] = useState();
  // const [sunset, setSunset] = useState();

  const [weather, setWeather] = useState(initialWeather);

  const gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const data = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    ).then((response) => response.json());

    // const data = await api_url.json();
    // console.log(data);
    setWeather({
      temp: data.main.temp,
      city: data.name,
      country: data.sys.country,
      sunrise: data.sys.sunrise,
      sunset: data.sys.sunset,
    });

    // setTemp((temp) => data.main.temp);
    // setCity((city) => data.name);
    // setCountry((country) => data.sys.country);
    // setSunrise((sunrise) => data.sys.sunrise);
    // setSunset((sunset) => data.sys.sunset);
  };
  return (
    <div>
      <Form weatherMethod={gettingWeather} />

      <Weather {...weather} />
    </div>
  );
};

GetApi.propTypes = {};

export default GetApi;
