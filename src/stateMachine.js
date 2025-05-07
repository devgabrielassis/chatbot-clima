const greeting = require("./states/greeting");
const menu = require("./states/menu");
const consultWeather = require("./states/consultWeather");
const exit = require("./states/exit");

let currentState = "greeting";

const states = {
  greeting,
  menu,
  consultWeather,
  exit,
};

function start(rl) {
  runState(rl);
}

function runState(rl) {
  states[currentState](rl, (nextState) => {
    currentState = nextState;
    runState(rl);
  });
}

module.exports = { start };
