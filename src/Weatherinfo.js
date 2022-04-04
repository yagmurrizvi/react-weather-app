import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import WeatherIcon from "./WeatherIcon";

export default function Weatherinfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="current-info">
        <h1 id="name">{props.data.city}</h1>

        <FormattedTime />
      </div>
      <div className="card" id="info1" style={{ width: "13rem" }}>
        <div className="card-body">
          <h5 className="card-title" id="main-day">
            <strong>
              {" "}
              <FormattedDate date={props.data.date} />{" "}
            </strong>
          </h5>
          <h6 className="card-subtitle" id="first-day-description">
            {props.data.description}
            <br />
            <WeatherIcon code={props.data.icon} />
          </h6>
          <p className="card-text">
            <span id="temperature">{Math.round(props.data.temperature)}</span>
            °C
            <br />
            <i className="fas fa-wind"></i>{" "}
            <span id="wind">{Math.round(props.data.wind)}</span> km/h
            <br />
            💧<span id="humidity"> {props.data.humidity}</span>%
          </p>
        </div>
      </div>
    </div>
  );
}
