import React from "react";
import WeatherComponent from "./WeatherComponent";
import "./App.css";
import "./WeatherComponent.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <WeatherComponent defaultCity="Kyiv" />
      </div>
      <p className="open-source-code">
        <a
          href="https://github.com/RoGreen19/finals-react-wether-app"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Sofiia Telychko
      </p>
    </div>
  );
}
export default App;
