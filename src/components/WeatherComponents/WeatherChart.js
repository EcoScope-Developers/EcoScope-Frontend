import React, { useState } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "../../assets/styles/weatherStyles/WeatherChart.css"; // Import CSS

const WeatherChart = ({ weatherData }) => {
  const [chartType, setChartType] = useState("line");
  const [dataKey, setDataKey] = useState("maxTemperature");

  const parameters = [
    { key: "maxTemperature", label: "Max Temperature (°C)", color: "#ff7300" },
    { key: "minTemperature", label: "Min Temperature (°C)", color: "#387908" },
    { key: "precipitation", label: "Precipitation (mm)", color: "#0088FE" },
    { key: "humidity", label: "Humidity (%)", color: "#FFBB28" },
    { key: "windSpeed", label: "Wind Speed (km/h)", color: "#00C49F" },
  ];

  return (
    <div className="weather-container">
      <h2 className="weather-heading">Weather Data Visualization</h2>

      {/* Dropdown Controls */}
      <div className="weather-controls">
        <select
          className="weather-select"
          value={chartType}
          onChange={(e) => setChartType(e.target.value)}
        >
          <option value="line">Line Chart</option>
          <option value="bar">Bar Chart</option>
          <option value="pie">Pie Chart</option>
        </select>

        <select
          className="weather-select"
          value={dataKey}
          onChange={(e) => setDataKey(e.target.value)}
        >
          {parameters.map((param) => (
            <option key={param.key} value={param.key}>
              {param.label}
            </option>
          ))}
        </select>
      </div>

      {/* Weather Chart */}
      <div className="weather-chart">
        <ResponsiveContainer width="100%" height={400}>
          {chartType === "line" && (
            <LineChart data={weatherData}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey={dataKey}
                stroke={
                  parameters.find((p) => p.key === dataKey)?.color || "#8884d8"
                }
              />
            </LineChart>
          )}

          {chartType === "bar" && (
            <BarChart data={weatherData}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                dataKey={dataKey}
                fill={
                  parameters.find((p) => p.key === dataKey)?.color || "#8884d8"
                }
              />
            </BarChart>
          )}

          {chartType === "pie" && (
            <PieChart>
              <Pie
                data={weatherData}
                dataKey={dataKey}
                nameKey="date"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#0088FE"
              >
                {weatherData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={parameters[index % parameters.length].color}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WeatherChart;
