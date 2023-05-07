import React, { useState } from "react";

export default function WeatherTemperature(props) {
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
      <div className="WeatherTemperature">
        <button className="celsius-button">°C</button>
        <h1>{Math.round(props.celsius)}°</h1>
        <button className="fahrenheit-button" onClick={showFarenheit}>
          °F
        </button>
      </div>
    );
  } else {
    let frenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <button className="celsius-button" onClick={showCelsius}>
          °C
        </button>
        <h1>{Math.round(frenheit)}°</h1>
        <button className="fahrenheit-button">°F</button>
      </div>
    );
  }
}
