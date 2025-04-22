function WeatherDetails({ weatherData, unit }) {
  if (!weatherData) return null;

  const { current } = weatherData;
  const tempUnit = unit === "metric" ? "°C" : "°F";
  const speedUnit = unit === "metric" ? "kph" : "mph";
  const visibility =
    unit === "metric"
      ? `${current.vis_km.toFixed(1)} km`
      : `${current.vis_miles.toFixed(1)} mi`;

  const feelsLike = unit === "metric"
    ? current.feelslike_c
    : current.feelslike_f;

  const windSpeed = unit === "metric"
    ? current.wind_kph
    : current.wind_mph;

  const getWindDirection = (degrees) => {
    const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    const index = Math.round(degrees / 45) % 8;
    return directions[index];
  };

  const isSunny = current.condition.text.toLowerCase().includes("sunny");

  return (
    <div className={`weather-details ${isSunny ? "sunny-gradient" : "default-card"}`}>
      <h3 className="details-title">Weather Details</h3>
      <div className="details-grid">
        <div className="detail-item">
          <span className="detail-label">Feels like</span>
          <span className="detail-value">{Math.round(feelsLike)} {tempUnit}</span>
        </div>

        <div className="detail-item">
          <span className="detail-label">Wind</span>
          <span className="detail-value">
            {Math.round(windSpeed)} {speedUnit} {getWindDirection(current.wind_degree)}
          </span>
        </div>

        <div className="detail-item">
          <span className="detail-label">Humidity</span>
          <span className="detail-value">{current.humidity}%</span>
        </div>

        <div className="detail-item">
          <span className="detail-label">Pressure</span>
          <span className="detail-value">{current.pressure_mb} hPa</span>
        </div>

        <div className="detail-item">
          <span className="detail-label">Visibility</span>
          <span className="detail-value">{visibility}</span>
        </div>
      </div>
    </div>
  );
}

export default WeatherDetails;
