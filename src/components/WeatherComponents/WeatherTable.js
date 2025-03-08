import "../../assets/styles/weatherStyles/WeatherTable.css"; // Import CSS

const WeatherTable = ({ weatherData }) => {
  return (
    <table className="weather-table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Max Temp (°C)</th>
          <th>Min Temp (°C)</th>
          <th>Humidity (%)</th>
          <th>Wind Speed (km/h)</th>
          <th>Precipitation (mm)</th>
        </tr>
      </thead>
      <tbody>
        {weatherData.map((day, index) => (
          <tr key={index} className="weather-row">
            <td>{day.date}</td>
            <td>{day.maxTemperature}</td>
            <td>{day.minTemperature}</td>
            <td>{day.humidity}</td>
            <td>{day.windSpeed}</td>
            <td>{day.precipitation}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default WeatherTable;
