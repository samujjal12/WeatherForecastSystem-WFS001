/**
 * Formats a timestamp to local time based on timezone offset
 * @param {number} timestamp - Unix timestamp
 * @param {number} timezone - Timezone offset in seconds
 * @returns {string} Formatted date and time
 */
export function formatLocalTime(timestamp, timezone) {
    const date = new Date(timestamp * 1000)
    const utcTime = date.getTime() + date.getTimezoneOffset() * 60000
    const localDate = new Date(utcTime + timezone * 1000)
  
    const options = {
      weekday: "long",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }
  
    return localDate.toLocaleString("en-US", options)
  }
  
  /**
   * Converts temperature between units
   * @param {number} temp - Temperature value
   * @param {string} from - Source unit ('C' or 'F')
   * @param {string} to - Target unit ('C' or 'F')
   * @returns {number} Converted temperature
   */
  export function convertTemperature(temp, from, to) {
    if (from === to) return temp
  
    if (from === "C" && to === "F") {
      return (temp * 9) / 5 + 32
    }
  
    if (from === "F" && to === "C") {
      return ((temp - 32) * 5) / 9
    }
  
    return temp
  }
  
  /**
   * Formats wind speed with appropriate units
   * @param {number} speed - Wind speed
   * @param {string} unit - 'metric' or 'imperial'
   * @returns {string} Formatted wind speed with units
   */
  export function formatWindSpeed(speed, unit) {
    const speedUnit = unit === "metric" ? "m/s" : "mph"
    return `${Math.round(speed)} ${speedUnit}`
  }
  