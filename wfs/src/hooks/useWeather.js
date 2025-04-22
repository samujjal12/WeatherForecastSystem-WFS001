"use client";

import { useState } from "react";
import { getWeatherData } from "../api/weather.js";

function useWeather() {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [unit, setUnit] = useState("metric"); // 'metric' for Celsius, 'imperial' for Fahrenheit

  const fetchWeather = async (location) => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await getWeatherData(location);
      setWeatherData(data);
    } catch (err) {
      setError(err.message || "Failed to fetch weather data");
      setWeatherData(null);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleUnit = () => {
    setUnit((prev) => (prev === "metric" ? "imperial" : "metric"));

    if (weatherData?.location?.name) {
      fetchWeather(weatherData.location.name);
    }
  };

  return {
    weatherData,
    isLoading,
    error,
    fetchWeather,
    unit,
    toggleUnit,
  };
}

export default useWeather;
