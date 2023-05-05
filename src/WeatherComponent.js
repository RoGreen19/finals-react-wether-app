import React from "react";
import "./WeatherComponent.css";

export default function WeatherComponent() {
  return (
    <div className="WeatherComponent">
      <div class="card first">
        <div class="card-header">Weather</div>
        <div class="card text-bg-dark">
          <img src="./cut2.jpg" class="card-img" alt="..." />
          <div class="card-img-overlay">
            <h3>Kyiv</h3>
            <h6 class="date">25.11.2022</h6>
            <h6 class="time">23.13</h6>
            <h6 class="current-precipitation">Cloudy</h6>
            <form id="city-input">
              <input
                class="search-line"
                type="search"
                placeholder="Search"
                id="search-new-city"
              />
              <input class="search-button" type="Submit" value="🔍" />
            </form>
            <button class="current-city-button">Current</button>
            <button class="celsius-button">°C</button>
            <button class="fahrenheit-button">°F</button>
            <img
              class="main-weather-picture"
              src="./rainy.png"
              alt="weather picture"
            />
            <h1>13°</h1>

            <div class="card-footer">
              <div class="row">
                <div class="col weather-humidity">
                  <p>Humidity</p>
                  <h4 class="humidity">100 %</h4>
                </div>
                <div class="col weather-visibility">
                  <p>Visibility</p>
                  <h4 class="visibility">7.2 km</h4>
                </div>
                <div class="col weather-wind">
                  <p>Wind</p>
                  <h4 class="wind">10 km/h</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <div class="card second">
        <div class="card-header">Week temperature</div>
        <div class="container week-temperature">
          <div class="row">
            <div class="col">
              <h5>24.11</h5>
              <samp class="week-date">Mon</samp>
              <br />
              <img src="./cloudy.png" class="week-weather-icon" />
              <br />
              -12°С
            </div>
            <div class="col">
              <h5>25.11</h5>
              <samp class="week-date">Tues</samp>
              <br />
              <img src="./rainy.png" class="week-weather-icon" /> <br />
              -12°С
            </div>
            <div class="col">
              <h5>26.11</h5>
              <samp class="week-date">Wed</samp>
              <br />
              <img src="./rainythunder.png" class="week-weather-icon" />
              <br />
              +12°С
            </div>
            <div class="col">
              <h5>27.11</h5>
              <samp class="week-date">Thurs</samp>
              <br />
              <img src="./thnderstorm.png" class="week-weather-icon" />
              <br />
              +12°С
            </div>
            <div class="col">
              <h5>28.11</h5>
              <samp class="week-date">Fri</samp>
              <br />
              <img src="./snowy.png" class="week-weather-icon" /> <br />
              +14°С
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
