import readlineSync from "readline-sync";
import { playRound } from "./games/calc.js";

const sayHello = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    game(name)
  };

  const game = (name) => {
    for (let i = 0; i < 3; i += 1) {
      const isCorrect = playRound(name);
      if (!isCorrect) {
        return;
      }
    }
    console.log(`Congratulations, ${name}!`);
  };

  export { sayHello }