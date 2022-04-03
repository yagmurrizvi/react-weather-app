import React from "react";
import "./Weather.css";

export default function Weather() {
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
                  autocomplete="off"
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
              Hamburg <i className="fas fa-umbrella"></i>
            </h1>
            <p id="time">
              <i className="fas fa-clock">
                <strong> 14:09</strong>
              </i>
            </p>
          </div>
          <div className="card" id="info1" style={{ width: "13rem" }}>
            <div className="card-body">
              <h5 className="card-title" id="main-day">
                <strong>Fri | Feb 11</strong>
              </h5>
              <h6 className="card-subtitle" id="first-day-description">
                Rain
                <br />
                <span id="weather-icon">
                  <i className="fas fa-cloud-rain"></i>
                </span>
              </h6>
              <p className="card-text">
                <span id="temperature">6</span>°C
                <br />
                <i className="fas fa-wind"></i> <span id="wind">5</span> km/h
                <br />
                💧<span id="humidity"> 60</span>%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
