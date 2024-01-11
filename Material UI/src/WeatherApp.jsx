import React, { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
const WeatherApp = () => {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 12.16,
    humidity: 67,
    temp: 13.05,
    tempMax: 13.05,
    tempMin: 13.05,
    weather: "smoke",
  });

  let updateInfo = (newInfo)=>{
    setWeatherInfo(newInfo);
  }





  return (
    <div style={{ textAlign: "center" }}>
      <h1>Weather App</h1>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
};

export default WeatherApp;
