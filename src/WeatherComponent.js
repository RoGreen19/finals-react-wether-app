import React, { useState } from "react";
import "./WeatherComponent.css";
import axios from "axios";
import cut2 from "./cut2.jpg";
import { InfinitySpin } from "react-loader-spinner";
import FormatedDate from "./FormatedDate";
import FormatedTime from "./FormatedTime";
import WeatherTemperature from "./WeatherTemperature";
import WeatherForecast from "./WeatherForecast";

export default function WeatherComponent(props) {
  const [newCity, setNewCity] = useState(props.defaultCity);
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
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function search() {
    const apiKey = "72bb9dab46b9ec3d65f423c63f27a9b8";
    let apiUrl = `//api.openweathermap.org/data/2.5/weather?q=${newCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponce);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(newCity);
  }

  function handleCityChange(event) {
    setNewCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="WeatherComponent">
        <div className="card first">
          <div className="card-header">Weather</div>
          <div className="card text-bg-dark">
            <img src={cut2} className="card-img" alt="" />
            <div className="card-img-overlay">
              <div className="searchEngine">
                <form id="city-input" onSubmit={handleSubmit}>
                  <input
                    className="search-line"
                    type="search"
                    placeholder="Search"
                    id="search-new-city"
                    onChange={handleCityChange}
                  />
                  <input
                    className="search-button"
                    type="Submit"
                    placeholder="🔍"
                    onChange={handleCityChange}
                  />
                </form>
              </div>
              <h3>{newCity}</h3>
              <h6 className="date">
                <FormatedDate date={weatherData.date} />
              </h6>
              <h6 className="time">
                <FormatedTime time={weatherData.time} />
              </h6>
              <h6 className="current-precipitation text-capitalize">
                {weatherData.description}
              </h6>

              <button className="current-city-button">Current</button>
              <img
                className="main-weather-picture"
                src={weatherData.iconUrl}
                alt="weatherPicture"
              />
              <WeatherTemperature celsius={weatherData.temperature} />

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
          <WeatherForecast />
        </div>
      </div>
    );
  } else {
    search();

    return <InfinitySpin width="50%" color="#9f63c7" />;
  }
}
