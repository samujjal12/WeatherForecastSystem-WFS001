"use client"

import { useState } from "react"
import SearchBar from "../components/SearchBar.jsx"
import WeatherCard from "../components/WeatherCard.jsx"
import WeatherDetails from "../components/WeatherDetails.jsx"
import Loader from "../components/loader.jsx"
import useWeather from "../hooks/useWeather.js"
import useWeatherBackground from "../hooks/useWeatherBackground.js"

function Home() {
  const [searchQuery, setSearchQuery] = useState("")
  const { weatherData, isLoading, error, fetchWeather, unit, toggleUnit } = useWeather()

  // 🔁 Hook to set body background class
  useWeatherBackground(weatherData?.current?.condition?.text)

  const handleSearch = (query) => {
    setSearchQuery(query)
    fetchWeather(query)
  }

  return (
    <main className="home-container">
      <div className="weather-app">
        <h1 className="app-title">Weather Forecast System</h1>
        <p className="app-subtitle">Get real-time weather information for any location</p>

        <SearchBar onSearch={handleSearch} />

        {error && (
          <div className="error-message">
            <p>{error}</p>
          </div>
        )}

        {isLoading ? (
          <Loader />
        ) : (
          weatherData && (
            <>
              <WeatherCard weatherData={weatherData} unit={unit} onToggleUnit={toggleUnit} />
              <WeatherDetails weatherData={weatherData} unit={unit} />
            </>
          )
        )}
      </div>
    </main>
  )
}

export default Home
