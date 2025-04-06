import React, {useState} from 'react';
import WeatherChart from "../../components/WeatherComponents/WeatherChart"
import WeatherForm from "../../components/WeatherComponents/WeatherForm"
import WeatherTable from "../../components/WeatherComponents/WeatherTable"

const HistoricalData = () => {
  const [weatherData, setWeatherData] = useState([]);
  const planName = localStorage.getItem("planName");

  if (!planName || planName.trim().toLowerCase() !== "premium") {
    return (
      <div className="tree-count-container fade-in">
        <div className="tree-count-card">
          <h1 className="feature-title">Tree Species Identifier</h1>
          <p className="feature-description">🚫 You need to upgrade to the <strong>Premium Plan</strong> to use this feature.</p>
        </div>
      </div>
    );
  }

  return (
    <div className='weather-container'>
      <h1 class="text-center weather-heading mt-5">Weather Visualization</h1>
      <WeatherForm setWeatherData={setWeatherData} />
      {weatherData.length > 0 && <WeatherTable weatherData={weatherData} />}
      {weatherData.length > 0 && <WeatherChart weatherData={weatherData} />}
    </div>
  );
};

export default HistoricalData;
