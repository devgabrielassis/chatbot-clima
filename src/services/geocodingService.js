const axios = require("axios");

async function getCoordinates(city) {
  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
    city
  )}&format=json&limit=1`;
  const response = await axios.get(url);
  const data = response.data[0];

  if (!data) return null;

  return {
    lat: data.lat,
    lon: data.lon,
  };
}

module.exports = { getCoordinates };
