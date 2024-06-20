import axios from 'axios';

const API_KEY = '034c88756984d2b32db70a1dffc46ebd';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getWeatherByCity = async (city) => {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric',
      },
    });
    return response.data;
  };
  
  export const getForecastByCity = async (city) => {
    const response = await axios.get(`${BASE_URL}/forecast`, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric',
      },
    });
    return response.data;
  };
  
  export const getOneCallForecast = async (lat, lon) => {
    const response = await axios.get(`${BASE_URL}/onecall`, {
      params: {
        lat: lat,
        lon: lon,
        appid: API_KEY,
        units: 'metric',
        exclude: 'minutely,hourly,alerts'
      },
    });
    return response.data;
  };