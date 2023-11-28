import readlineSync from "readline-sync";

const getGameOver = (name, playRound) => {
  for (let i = 0; i < 3; i += 1) {
    const isCorrect = playRound(name);
    if (!isCorrect) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

const sayHello = (playRound, getMission) => {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
  getMission()
  getGameOver(name, playRound);
};

export default sayHello;
