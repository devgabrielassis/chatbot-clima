module.exports = function (rl, next) {
  console.log("\nO que você deseja fazer?");
  console.log("[1] Consultar clima");
  console.log("[2] Sair");

  rl.question("Escolha uma opção: ", (answer) => {
    switch (answer.trim()) {
      case "1":
        next("consultWeather");
        break;
      case "2":
        next("exit");
        break;
      default:
        console.log("Opção inválida!");
        next("menu");
    }
  });
};
