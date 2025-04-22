"use client";

import { useState } from "react";

function SearchBar({ onSearch }) {
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = location.trim();
    if (trimmed) {
      onSearch(trimmed);
      setLocation(""); // Optional: clear input after search
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <div className="search-input-container">
        <input
          type="text"
          placeholder="Enter a place..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="search-input"
        />
        <button
          type="submit"
          className="search-button"
          disabled={!location.trim()}
        >
          Get Weather
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
