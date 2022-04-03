import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setweatherData] = useState({ ready: false });

  function showWeather(response) {
    setweatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="card" id="mainBody" style={{ width: "60rem" }}>
        <div className="card-body">
          <div className="container">
            <form id="search-form">
              <div className="row d-flex justify-content-center">
                <div className="col-5 ">
                  <input
                    type="text"
                    className="form-control"
                    id="search-city"
                    placeholder="Enter a city name"
                    autoComplete="off"
                  />
                </div>
                <div className="col-1">
                  <button
                    type="submit"
                    className="btn btn-outline-secondary btn-light text-center"
                    id="search"
                  >
                    <i className="fas fa-search-location"></i>
                  </button>
                  <button type="button" id="current-button">
                    <i className="fas fa-location-arrow"></i>
                  </button>
                </div>
              </div>
            </form>
            <div className="current-info">
              <h1 id="name">
                {weatherData.city} <i className="fas fa-umbrella"></i>
              </h1>

              <FormattedTime />
            </div>
            <div className="card" id="info1" style={{ width: "13rem" }}>
              <div className="card-body">
                <h5 className="card-title" id="main-day">
                  <strong>
                    {" "}
                    <FormattedDate date={weatherData.date} />{" "}
                  </strong>
                </h5>
                <h6 className="card-subtitle" id="first-day-description">
                  {weatherData.description}
                  <br />
                  <span id="weather-icon">
                    <i className="fas fa-cloud-rain"></i>
                  </span>
                </h6>
                <p className="card-text">
                  <span id="temperature">
                    {Math.round(weatherData.temperature)}
                  </span>
                  °C
                  <br />
                  <i className="fas fa-wind"></i>{" "}
                  <span id="wind">{Math.round(weatherData.wind)}</span> km/h
                  <br />
                  💧<span id="humidity"> {weatherData.humidity}</span>%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "525c9c9ac5b08ed476653a02fbaab704";
    let city = "Antalya";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);

    return "Loading...";
  }
}
