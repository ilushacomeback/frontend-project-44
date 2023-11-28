import readlineSync from "readline-sync";

const playRound = (name) => {
    const number = Math.floor(Math.random() * 100);
    console.log('Answer "yes" if the number is even, otherwise answer "no". ');
    console.log(`Question: ${number}`);
    const answerPlayer = readlineSync.question("Your answer: ");
    const currentAnswer = number % 2 === 0 ? "yes" : "no";
    if (currentAnswer === answerPlayer) {
      console.log("Correct!");
      return true;
    } else {
      console.log(
        `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`
      );
      return false;
    }
  };

  export { playRound }