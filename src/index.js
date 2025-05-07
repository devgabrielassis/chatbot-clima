const readline = require("readline");
const stateMachine = require("./stateMachine");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

stateMachine.start(rl);