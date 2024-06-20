import React, { useState, useEffect } from 'react';
import { getWeatherByCity, getForecastByCity } from './Weather';
import SearchBar from './Searchbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faCloud, faCloudSun, faCloudRain, faSnowflake, faMoon } from '@fortawesome/free-solid-svg-icons';
import './WeatherDashboard.css';

const FarmerDashboard = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (weather) {
      setVisible(false);
      setTimeout(() => {
        setVisible(true);
      }, 10);
    }
  }, [weather]);

  const fetchWeather = async () => {
    try {
      const weatherData = await getWeatherByCity(city);
      const forecastData = await getForecastByCity(city);
      setWeather(weatherData);
      setForecast(forecastData);
      setError(null);
    } catch (err) {
      setError(err.message || 'City not found');
    }
  };

  const handleCityChange = (e) => setCity(e.target.value);

  const getWeatherIcon = (weatherCode) => {
    switch (weatherCode) {
      case '01d':
        return <FontAwesomeIcon icon={faSun} />;
      case '01n':
        return <FontAwesomeIcon icon={faMoon} />;
      case '02d':
        return <FontAwesomeIcon icon={faCloudSun} />;
      case '02n':
        return <FontAwesomeIcon icon={faCloud} />;
      case '03d':
      case '03n':
      case '04d':
      case '04n':
        return <FontAwesomeIcon icon={faCloud} />;
      case '09d':
      case '09n':
      case '10d':
      case '10n':
        return <FontAwesomeIcon icon={faCloudRain} />;
      case '11d':
      case '11n':
        return <FontAwesomeIcon icon={faCloudSun} />;
      case '13d':
      case '13n':
        return <FontAwesomeIcon icon={faSnowflake} />;
      default:
        return <FontAwesomeIcon icon={faSun} />;
    }
  };

  return (
    <div className={`weather-dashboard ${visible ? 'visible' : 'hidden'}`}>
      <h1>Farmer Dashboard</h1>
      <SearchBar city={city} onCityChange={handleCityChange} onSearch={fetchWeather} />
      {error && <p className="error">{error}</p>}
      {weather && (
        <div className="current-weather">
          <h2>{weather.name}</h2>
          <div className="weather-icon">{getWeatherIcon(weather.weather[0].icon)}</div>
          <p>{weather.weather[0].description}</p>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
      {forecast && (
        <div className="hourly-forecast">
          <h3>Hourly Forecast</h3>
          <div className="forecast-grid">
            {forecast.list.slice(0, 8).map((item, index) => (
              <div key={index} className="forecast-item">
                <p>{new Date(item.dt_txt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                <div className="weather-icon">{getWeatherIcon(item.weather[0].icon)}</div>
                <p>{item.weather[0].description}</p>
                <p>Temp: {item.main.temp}°C</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FarmerDashboard;
