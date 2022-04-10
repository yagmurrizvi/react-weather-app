import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°C `;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°C `;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[day];
  }
  return (
    <div>
      <h5 className="card-title" id="second-day">
        <strong>{day()}</strong>
      </h5>
      <h6 className="card-subtitle" id="description-forecast">
        {props.data.weather[0].main}
      </h6>
      <WeatherIcon code={props.data.weather[0].icon} />
      <div className="Weather-temperatures">
        <span className="temperature-max">ꜛ{maxTemp()} | </span>
        <span className="temperature-min">ꜜ{minTemp()}</span>
      </div>
      <div className="Weather-humidity">💧{props.data.humidity}% </div>
    </div>
  );
}
