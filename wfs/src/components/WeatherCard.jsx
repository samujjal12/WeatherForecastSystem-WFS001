"use client";
import { formatLocalTime } from "../utils/helpers.js";

function WeatherCard({ weatherData, unit, onToggleUnit }) {
  if (!weatherData) return null;

  const { location, current } = weatherData;
  const temp = unit === "metric" ? current.temp_c : current.temp_f;
  const feelsLike = unit === "metric" ? current.feelslike_c : current.feelslike_f;
  const tempUnit = unit === "metric" ? "°C" : "°F";
  const iconUrl = `https:${current.condition.icon}`;

  const isSunny = current.condition.text.toLowerCase().includes("sunny");

  return (
    <div
      className={`weather-card ${
        isSunny ? "sunny-gradient" : "default-card"
      }`}
    >
      <div className="weather-card-header">
        <button onClick={onToggleUnit} className={`unit-toggle-button ${isSunny ? "sunny-button" : ""}`}>
          Switch to {unit === "metric" ? "°F" : "°C"}
        </button>
      </div>

      <div className="weather-card-content">
        <div className="weather-location">
          <h1>{location.name}, {location.country}</h1>
          {/* <p className="weather-time">
            {formatLocalTime(location.localtime_epoch, location.tz_id)}
          </p> */}
        </div>

        <div className="weather-info">
          <img
            src={iconUrl || "/placeholder.svg"}
            alt={current.condition.text}
            className="weather-icon"
          />
          <p className="weather-description">{current.condition.text}</p>
        </div>

        <div className="weather-temperature">
          <h3>{Math.round(temp)}{tempUnit}</h3>
          <p className="feels-like">Feels like: {Math.round(feelsLike)}{tempUnit}</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
