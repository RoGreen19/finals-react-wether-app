import React, { useState } from "react";
import "./WeatherComponent.css";
import axios from "axios";
import cloudy from "./cloudy.png";
import cut2 from "./cut2.jpg";
import rainy from "./rainy.png";
import rainythunder from "./rainythunder.png";
import snowy from "./snowy.png";
import thnderstorm from "./thnderstorm.png";

export default function WeatherComponent() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponce(response) {
    setWeatherData({
      temperature: response.data.main.temp,
    });
    setReady(true);
  }

  if (ready) {
    https: return (
      <div className="WeatherComponent">
        <div className="card first">
          <div className="card-header">Weather</div>
          <div className="card text-bg-dark">
            <img src={cut2} className="card-img" alt="" />
            <div className="card-img-overlay">
              <h3>Kyiv</h3>
              <h6 className="date">25.11.2022</h6>
              <h6 className="time">23.13</h6>
              <h6 className="current-precipitation">Cloudy</h6>
              <form id="city-input">
                <input
                  className="search-line"
                  type="search"
                  placeholder="Search"
                  id="search-new-city"
                  autoFocus="on"
                />
                <input
                  className="search-button"
                  type="Submit"
                  placeholder="🔍"
                />
              </form>
              <button className="current-city-button">Current</button>
              <button className="celsius-button">°C</button>
              <button className="fahrenheit-button">°F</button>
              <img
                className="main-weather-picture"
                src={rainy}
                alt="weatherPicture"
              />
              <h1>{weatherData.temperature}</h1>

              <div className="card-footer">
                <div className="row">
                  <div className="col weather-humidity">
                    <p>Humidity</p>
                    <h4 className="humidity">100 %</h4>
                  </div>
                  <div className="col weather-visibility">
                    <p>Visibility</p>
                    <h4 className="visibility">7.2 km</h4>
                  </div>
                  <div className="col weather-wind">
                    <p>Wind</p>
                    <h4 className="wind">10 km/h</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />
        <div className="card second">
          <div className="card-header">Week temperature</div>
          <div className="container week-temperature">
            <div className="row">
              <div className="col">
                <h5>24.11</h5>
                <samp className="week-date">Mon</samp>
                <br />
                <img src={cloudy} className="week-weather-icon" alt="" />
                <br />
                -12°С
              </div>
              <div className="col">
                <h5>25.11</h5>
                <samp className="week-date">Tues</samp>
                <br />
                <img src={rainy} className="week-weather-icon" alt="" /> <br />
                -12°С
              </div>
              <div className="col">
                <h5>26.11</h5>
                <samp className="week-date">Wed</samp>
                <br />
                <img src={rainythunder} className="week-weather-icon" alt="" />
                <br />
                +12°С
              </div>
              <div className="col">
                <h5>27.11</h5>
                <samp className="week-date">Thurs</samp>
                <br />
                <img src={thnderstorm} className="week-weather-icon" alt="" />
                <br />
                +12°С
              </div>
              <div className="col">
                <h5>28.11</h5>
                <samp className="week-date">Fri</samp>
                <br />
                <img src={snowy} className="week-weather-icon" alt="" /> <br />
                +14°С
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "46fac47dd8b8fa26d1b6852218ad3dfe";
    let city = "Kyiv";
    let apiUrl = `//api.openweathermap.org/data/2.5/weather?q={city name}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponce);

    return "Loading...";
  }
}
