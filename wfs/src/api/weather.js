import { API_KEY } from "../config.js";

/**
 * Fetches weather data for a given location using WeatherAPI.com
 * @param {string} location - City name or ZIP code
 * @returns {Promise<Object>} Weather data
 */
export async function getWeatherData(location = "London") {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }

    return await response.json();
  } catch (error) {
    console.error("Weather API error:", error);
    throw error;
  }
}
