import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Hamburg" />
        <footer>
          This project was coded by Yagmur Rizvi and is{" "}
          <a
            href="https://github.com/yagmurrizvi/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
