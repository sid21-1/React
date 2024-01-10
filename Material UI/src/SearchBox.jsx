import React from "react";
import "./SearchBox.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
const SearchBox = () => {
  const [city, setCity] = useState("");
  const url = "https://api.openweathermap.org/data/2.5/weather";

  const apiKey = "7ad0fea6d52d364bd5288125fb646d32";

  let getWeatherInfo = async () => {
    let response = await fetch(`${url}?q=${city}&appid=${apiKey}&units=metric`);
    let jsonResponse = await response.json();
    console.log(jsonResponse);
    let result = {
      city:city,
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      humidity: jsonResponse.main.humidity,
      feelsLike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,
    };
    console.log(result);
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(city);
    setCity("");
    getWeatherInfo();
  };

  return (
    <div className="SearchBox">
      <h3>Search Box</h3>
      <form action="" onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
};

export default SearchBox;
