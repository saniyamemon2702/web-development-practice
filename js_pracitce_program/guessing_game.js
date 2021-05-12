let userInput = parseInt(prompt("Enter maximum number"));
while (!userInput) {
  userInput = parseInt(prompt("Enter maximum number"));
}

const targetNum = Math.ceil(Math.random() * userInput) + 1;
console.log("Random number is:", targetNum);

let guess = prompt("Enter your first guess");
let guessCounter = 1;

while (parseInt(guess) !== targetNum) {
  if (guess === "q") break;
  else {
    guessCounter += 1;
    if (guess > targetNum) {
      guess = prompt("Too high...Enter lower value");
    } else {
      guess = prompt("Too low...Enter higher value");
    }
  }
}
if (guess === "q") {
  console.log("YOU QUITE!!!");
} else {
  console.log(`Conratulaions..You took ${guessCounter} guesses.`);
}
