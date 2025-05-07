const axios = require("axios");

async function getWeather(lat, lon) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
  const response = await axios.get(url);
  const data = response.data;

  return {
    temperature: data.current_weather.temperature,
  };
}

module.exports = { getWeather };
