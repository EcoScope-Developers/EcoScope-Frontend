import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "../../assets/styles/weatherStyles/WeatherForm.css"; // Import CSS

const WeatherForm = ({ setWeatherData }) => {
  const [city, setCity] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [loading, setLoading] = useState(false); // Loader State

  const fetchWeather = async () => {
    if (!city || !startDate || !endDate) {
      toast.error("Please enter all fields!");
      return;
    }

    setLoading(true); // Show Loader

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
      toast.success("Weather data fetched successfully!");
    } catch (error) {
      console.error("Error fetching weather:", error);
      toast.error("Failed to fetch weather data");
    } finally {
      setLoading(false); // Hide Loader
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
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
        <button className="weather-button" onClick={fetchWeather} disabled={loading}>
          {loading ? "Loading..." : "Get Weather"}
        </button>
      </div>
    </>
  );
};

export default WeatherForm;
