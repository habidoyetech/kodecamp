const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startGame() {
  const randomNumber = generateRandomNumber(1, 10);

  rl.question('Guess a number between 1 and 10 (or type "exit" to quit): ', (userInput) => {
    if (userInput.toLowerCase() === 'exit') {
      console.log('Exiting the game. Goodbye!');
      rl.close();
    } else {
      const guessedNumber = parseInt(userInput);

      if (guessedNumber === randomNumber) {
        console.log('You have won!');
      } else {
        console.log(`You have lost! The random number generated is ${randomNumber}.`);
      }

      // Play the game again
      startGame();
    }
  });
}

// Start the game initially
startGame();
