import React from "react";
import "./SearchBox.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
const SearchBox = ({ updateInfo }) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);
  const url = "https://api.openweathermap.org/data/2.5/weather";

  const apiKey = "7ad0fea6d52d364bd5288125fb646d32";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${url}?q=${city}&appid=${apiKey}&units=metric`
      );
      let jsonResponse = await response.json();

      if (response.ok) {
        let result = {
          city: city,
          temp: jsonResponse.main.temp,
          tempMin: jsonResponse.main.temp_min,
          tempMax: jsonResponse.main.temp_max,
          humidity: jsonResponse.main.humidity,
          pressure: jsonResponse.main.pressure, // Adjusted to include pressure
          feelsLike: jsonResponse.main.feels_like,
          weather: jsonResponse.weather[0]?.description || "Unknown", // Use optional chaining to handle undefined
        };
        console.log(result);
        return result;
      } else {
        throw new Error(
          `No data found for the specified city: ${jsonResponse.message}`
        );
      }
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch (err) {
      setError(true);
    }
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
        {error && <p>No such place exists</p>}
      </form>
    </div>
  );
};

export default SearchBox;
