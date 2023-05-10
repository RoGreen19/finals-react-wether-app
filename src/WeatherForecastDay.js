import React, { useState } from "react";

export default function WeatherForecastDay(props) {
  let iconUrl = `https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
  let date = new Date(props.data.dt * 1000);

  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    if (temperature > 0) {
      return `+${temperature}°`;
    } else if ((temperature = 0)) {
      return `${temperature}°`;
    } else {
      return `-${temperature}°`;
    }
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    if (temperature > 0) {
      return `+${temperature}°`;
    } else if ((temperature = 0)) {
      return `${temperature}°`;
    } else {
      return `-${temperature}°`;
    }
  }

  function day() {
    let day = date.getDate();
    if (day < 10) {
      return (day = `0${day}`);
    } else {
      return (day = `${day}`);
    }
  }
  function month() {
    let month = date.getMonth() + 1;
    if (month < 10) {
      return (month = `0${month}`);
    } else {
      return (month = `${month}`);
    }
  }

  function dayOfWeek() {
    let dayOfWeek = date.getDay();
    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

    return days[dayOfWeek];
  }

  const [unit, setUnit] = useState("celsius");
  function showFarenheit(event) {
    event.preventDefault();
    setUnit(`farenheit`);
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit(`celsius`);
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherForecast">
        <h5>
          {day()}.{month()}
        </h5>
        <samp className="week-date">{dayOfWeek()}</samp>
        <br />
        <img
          src={iconUrl}
          className="week-weather-icon"
          alt="weatherForecast"
        />
        <br />
        <span className="forecast-temperature-max">{maxTemperature()}/</span>
        <span className="forecast-temperature-min">{minTemperature()}</span>
        <button className="fahrenheit-button" onClick={showFarenheit}>
          °F
        </button>
      </div>
    );
  } else {
    return (
      <div className="WeatherForecast">
        <h5>
          {day()}.{month()}
        </h5>
        <samp className="week-date">{dayOfWeek()}</samp>
        <br />
        <img
          src={iconUrl}
          className="week-weather-icon"
          alt="weatherForecast"
        />
        <br />
        <span className="forecast-temperature-max">{maxTemperature()}/</span>
        <span className="forecast-temperature-min">{minTemperature()}</span>
        <button className="celsius-button" onClick={showCelsius}>
          °C
        </button>
      </div>
    );
  }
}
