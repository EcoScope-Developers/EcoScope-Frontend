import { useState } from "react";
import "../../assets/styles/weatherStyles/WeatherForm.css"; // Import CSS

const WeatherForm = ({ setWeatherData }) => {
  const [city, setCity] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const fetchWeather = async () => {
    if (!city || !startDate || !endDate) {
      alert("Please enter all fields!");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/api/weather/fetch-weather", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ city, startDate, endDate }),
      });

      const data = await response.json();
      if (!Array.isArray(data)) {
        throw new Error("Invalid response from server");
      }

      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather:", error);
      alert("Failed to fetch weather data");
    }
  };

  return (
    <div className="weather-form">
      <input
        type="text"
        className="weather-input"
        placeholder="Enter City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <input
        type="date"
        className="weather-input"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <input
        type="date"
        className="weather-input"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      <button className="weather-button" onClick={fetchWeather}>
        Get Weather
      </button>
    </div>
  );
};

export default WeatherForm;
