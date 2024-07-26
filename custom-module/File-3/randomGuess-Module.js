const readline = require("readline");

const randomGuess = () => {
  const input = readline.createInterface({
    input: process.stdin,
    output: process.output,
  });
  let rand = Math.floor(Math.random() * 10);
  console.log(rand)

  console.log("Guess The Number Between 1 to 10:");
  input.on("line", (ans) => { //input.on("line") // repeatly run untill answer will be write
    if (ans == rand) {
      console.log("Your Guess Correct!");
      input.close();
    } else {
      console.log("Your Guess Is Wrong! Try Again");
      console.log("Guess The Number Between 1 to 10:");
    }
  });
};

module.exports = randomGuess
