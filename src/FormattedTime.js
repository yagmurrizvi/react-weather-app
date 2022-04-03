import React from "react";

export default function FormattedTime() {
  let now = new Date();
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <p id="time">
      <i className="fas fa-clock">
        <strong>
          {hours}:{minutes}
        </strong>
      </i>
    </p>
  );
}
