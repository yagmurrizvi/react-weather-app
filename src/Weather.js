import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setweatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function showWeather(response) {
    setweatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      description: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "525c9c9ac5b08ed476653a02fbaab704";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  if (weatherData.ready) {
    return (
      <div className="card" id="mainBody" style={{ width: "60rem" }}>
        <div className="card-body">
          <div className="container">
            <form id="search-form" onSubmit={handleSubmit}>
              <div className="row d-flex justify-content-center">
                <div className="col-5 ">
                  <input
                    type="text"
                    className="form-control"
                    id="search-city"
                    placeholder="Enter a city name"
                    autoComplete="off"
                    onChange={handleCityChange}
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
                </div>
              </div>
            </form>
            <WeatherInfo data={weatherData} />
            <WeatherForecast coordinates={weatherData.coordinates} />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
