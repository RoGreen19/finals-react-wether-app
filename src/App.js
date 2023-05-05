import React from "react";
import WeatherComponent from "./WeatherComponent";
import "./App.css";
import "./WeatherComponent.css";
import "./cloudy.png";

function App() {
  return (
    <div className="App">
      <div className="container">
        <WeatherComponent />
      </div>
    </div>
  );
}
export default App;
