import React from "react";
import WeatherComponent from "./WeatherComponent";
import "./App.css";
import "./WeatherComponent.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <WeatherComponent defaulyCity="Kyiv" />
      </div>
    </div>
  );
}
export default App;
