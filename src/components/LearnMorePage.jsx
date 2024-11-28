import React, { useState } from "react";
import axios from "axios";

const LearnMorePage = () => {
  const [location, setLocation] = useState({ lat: "", lon: "" });
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dinero, setDinero] = useState("");
  const [paneles, setPaneles] = useState("");
  const [climaCalculado, setClimaCalculado] = useState(false);

  const API_KEY = "a1e499dae2e276e67f92c10856b18ac3"; // Tu clave de API de OpenWeatherMap

  const fetchWeatherData = async () => {
    if (!location.lat || !location.lon) {
      setError("Please enter valid latitude and longitude.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}&units=metric`
      );
      setWeather(response.data);
      setClimaCalculado(true);
    } catch (err) {
      setError("Error fetching weather data. Please check your API key or network connection.");
    } finally {
      setLoading(false);
    }
  };

  const calcularPaneles = () => {
    if (!climaCalculado) {
      alert("You must calculate the weather first.");
      return;
    }

    let din = parseFloat(dinero); 
    if (isNaN(din) || din <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    let wh = 0;
    const dinorg = din;

    if (din >= 76.125) {
      din -= 76.125;
      wh += 75;
    } else {
      wh += Math.ceil(din / 1.015);
      din = 0;
    }
    if (din >= 81.25) {
      din -= 81.25;
      wh += 65;
    } else if (din > 0) {
      wh += Math.ceil(din / 1.25);
      din = 0;
    }
    if (din > 0) {
      wh += Math.ceil(din / 3.73);
    }

    const temp = weather.main.temp;
    if (temp < 25 || temp > 30) {
      wh = wh * 1.15; 
    }

    const panelesCalculados = Math.ceil(wh / 50); 
    setPaneles(`You need at least ${panelesCalculados} solar panel(s).`);
  };

  return (
    <div style={{ margin: "20px", fontFamily: "Arial" }}>
      <h2>Learn More About Solar Energy</h2>

      <div className="card shadow p-4">
        <h4>Check Weather</h4>
        <p>Enter latitude and longitude to get the weather data:</p>
        <div className="mb-3">
          <label className="form-label">Latitude:</label>
          <input
            type="number"
            className="form-control"
            value={location.lat}
            onChange={(e) => setLocation({ ...location, lat: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Longitude:</label>
          <input
            type="number"
            className="form-control"
            value={location.lon}
            onChange={(e) => setLocation({ ...location, lon: e.target.value })}
          />
        </div>
        <button onClick={fetchWeatherData} className="btn btn-primary">
          Check Weather
        </button>
        {loading && <p>Loading data...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {weather && (
          <div style={{ marginTop: "20px" }}>
            <h5>Weather Results:</h5>
            <p>City: {weather.name}</p>
            <p>Temperature: {weather.main.temp}°C</p>
            <p>Description: {weather.weather[0].description}</p>
            <p>Humidity: {weather.main.humidity}%</p>
          </div>
        )}
      </div>

      <div className="card shadow p-4 mt-4">
        <h4>Solar Panel Calculator</h4>
        <p>Enter available money (in your currency):</p>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            value={dinero}
            onChange={(e) => setDinero(e.target.value)}
          />
        </div>
        <button onClick={calcularPaneles} className="btn btn-success">
          Calculate Panels
        </button>

        {paneles && (
          <div style={{ marginTop: "20px" }}>
            <h5>Result:</h5>
            <p>{paneles}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LearnMorePage;
