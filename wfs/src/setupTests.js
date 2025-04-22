import { API_BASE_URL, API_KEY } from "../config.js"

/**
 * Geocodes a location string to coordinates
 * @param {string} location - City name, ZIP code, etc.
 * @returns {Promise<{lat: number, lon: number} | null>} Coordinates or null if not found
 */
export async function geocodeLocation(location) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/geo/1.0/direct?q=${encodeURIComponent(location)}&limit=1&appid=${API_KEY}`,
    )

    if (!response.ok) {
      throw new Error("Failed to find location")
    }

    const data = await response.json()

    if (!data || data.length === 0) {
      return null
    }

    return {
      lat: data[0].lat,
      lon: data[0].lon,
      name: data[0].name,
      country: data[0].country,
    }
  } catch (error) {
    console.error("Geocoding error:", error)
    throw error
  }
}
