import React from "react";
import "./WeatherComponent.css";

export default function WeatherComponent() {
  return (
    <div className="WeatherComponent">
      <div className="card first">
        <div className="card-header">Weather</div>
        <div className="card text-bg-dark">
          <img src="./cut2.jpg" className="card-img" alt="" />
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
              <input className="search-button" type="Submit" placeholder="🔍" />
            </form>
            <button className="current-city-button">Current</button>
            <button className="celsius-button">°C</button>
            <button className="fahrenheit-button">°F</button>
            <img
              className="main-weather-picture"
              src="./rainy.png"
              alt="weatherPicture"
            />
            <h1>13°</h1>

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
              <img src="./cloudy.png" className="week-weather-icon" alt="" />
              <br />
              -12°С
            </div>
            <div className="col">
              <h5>25.11</h5>
              <samp className="week-date">Tues</samp>
              <br />
              <img
                src="./rainy.png"
                className="week-weather-icon"
                alt=""
              />{" "}
              <br />
              -12°С
            </div>
            <div className="col">
              <h5>26.11</h5>
              <samp className="week-date">Wed</samp>
              <br />
              <img
                src="./rainythunder.png"
                className="week-weather-icon"
                alt=""
              />
              <br />
              +12°С
            </div>
            <div className="col">
              <h5>27.11</h5>
              <samp className="week-date">Thurs</samp>
              <br />
              <img
                src="./thnderstorm.png"
                className="week-weather-icon"
                alt=""
              />
              <br />
              +12°С
            </div>
            <div className="col">
              <h5>28.11</h5>
              <samp className="week-date">Fri</samp>
              <br />
              <img
                src="./snowy.png"
                className="week-weather-icon"
                alt=""
              />{" "}
              <br />
              +14°С
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
