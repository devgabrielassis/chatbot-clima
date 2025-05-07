const geocodingService = require("../services/geocodingService");
const weatherService = require("../services/weatherService");

module.exports = async function (rl, next) {
  rl.question("Digite o nome da cidade: ", async (city) => {
    try {
      const coords = await geocodingService.getCoordinates(city);
      if (!coords) throw new Error("Cidade não encontrada!");

      const weather = await weatherService.getWeather(coords.lat, coords.lon);
      console.log(`🌤️ Clima em ${city}:`);
      console.log(`Temperatura atual: ${weather.temperature}°C`);
    } catch (error) {
      console.error("Erro:", error.message);
    }

    next("menu");
  });
};
