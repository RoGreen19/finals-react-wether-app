import React, { useState } from "react";
import "./WeatherComponent.css";
import axios from "axios";
import cloudy from "./cloudy.png";
import cut2 from "./cut2.jpg";
import rainy from "./rainy.png";
import rainythunder from "./rainythunder.png";
import snowy from "./snowy.png";
import thnderstorm from "./thnderstorm.png";
import { InfinitySpin } from "react-loader-spinner";
import FormatedDate from "./FormatedDate";
import FormatedTime from "./FormatedTime";

export default function WeatherComponent(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponce(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      visibility: response.data.visibility / 1000,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      time: new Date(response.data.dt * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="WeatherComponent">
        <div className="card first">
          <div className="card-header">Weather</div>
          <div className="card text-bg-dark">
            <img src={cut2} className="card-img" alt="" />
            <div className="card-img-overlay">
              <h3>Kyiv</h3>
              <h6 className="date">
                <FormatedDate date={weatherData.date} />
              </h6>
              <h6 className="time">
                <FormatedTime time={weatherData.time} />
              </h6>
              <h6 className="current-precipitation text-capitalize">
                {weatherData.description}
              </h6>
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
              <h1>{Math.round(weatherData.temperature)}°</h1>

              <div className="card-footer">
                <div className="row">
                  <div className="col weather-humidity">
                    <p>Humidity</p>
                    <h4 className="humidity">{weatherData.humidity} %</h4>
                  </div>
                  <div className="col weather-visibility">
                    <p>Visibility</p>
                    <h4 className="visibility">{weatherData.visibility} km</h4>
                  </div>
                  <div className="col weather-wind">
                    <p>Wind</p>
                    <h4 className="wind">
                      {Math.round(weatherData.wind)} km/h
                    </h4>
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
    let apiUrl = `//api.openweathermap.org/data/2.5/weather?q=${props.defaulyCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponce);

    return <InfinitySpin width="50%" color="#9f63c7" />;
  }
}
