import React, {useState} from 'react';
import WeatherChart from "../../components/WeatherComponents/WeatherChart"
import WeatherForm from "../../components/WeatherComponents/WeatherForm"
import WeatherTable from "../../components/WeatherComponents/WeatherTable"

const HistoricalData = () => {
  const [weatherData, setWeatherData] = useState([]);
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
