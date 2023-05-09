import React, { useState } from "react";
import rainy from "./rainy.png";
import rainythunder from "./rainythunder.png";
import snowy from "./snowy.png";
import cloudy from "./cloudy.png";
import thnderstorm from "./thnderstorm.png";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="weathertForecast">
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
                <span className="forecast-temperature-max">
                  {Math.round(forecast[0].temp.max)}°/
                </span>
                <span className="forecast-temperature-min">
                  {Math.round(forecast[0].temp.min)}°
                </span>
              </div>
              <div className="col">
                <h5>25.11</h5>
                <samp className="week-date">Tues</samp>
                <br />
                <img src={rainy} className="week-weather-icon" alt="" /> <br />
                <span className="forecast-temperature-max">-12°/</span>
                <span className="forecast-temperature-min">-12°</span>
              </div>
              <div className="col">
                <h5>26.11</h5>
                <samp className="week-date">Wed</samp>
                <br />
                <img src={rainythunder} className="week-weather-icon" alt="" />
                <br />
                <span className="forecast-temperature-max">-12°/</span>
                <span className="forecast-temperature-min">-12°</span>
              </div>
              <div className="col">
                <h5>27.11</h5>
                <samp className="week-date">Thurs</samp>
                <br />
                <img src={thnderstorm} className="week-weather-icon" alt="" />
                <br />
                <span className="forecast-temperature-max">-12°/</span>
                <span className="forecast-temperature-min">-12°</span>
              </div>
              <div className="col">
                <h5>28.11</h5>
                <samp className="week-date">Fri</samp>
                <br />
                <img src={snowy} className="week-weather-icon" alt="" /> <br />
                <span className="forecast-temperature-max">-12°/</span>
                <span className="forecast-temperature-min">-12°</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    const apiKey = `5201594abea9f3e38b70e65b11a80c24`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }
  return null;
}
