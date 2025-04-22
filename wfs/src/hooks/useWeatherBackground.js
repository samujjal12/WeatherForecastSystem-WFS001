import { useEffect } from "react"

function useWeatherBackground(conditionText) {
  useEffect(() => {
    if (!conditionText) {
      document.body.className = "default-weather"
      return
    }

    const condition = conditionText.toLowerCase()

    if (condition.includes("rain")) {
      document.body.className = "weather-rain"
    } else if (condition.includes("cloud")) {
      document.body.className = "weather-cloud"
    } else if (condition.includes("snow")) {
      document.body.className = "weather-snow"
    } else if (condition.includes("sun") || condition.includes("clear")) {
      document.body.className = "weather-sunny"
    } else if (condition.includes("thunder")) {
      document.body.className = "weather-thunder"
    } else {
      document.body.className = "default-weather"
    }
  }, [conditionText])
}

export default useWeatherBackground
