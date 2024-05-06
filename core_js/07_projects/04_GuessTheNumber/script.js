let randomNumber = parseInt(Math.floor(Math.random() * 100) + 1);

const submitButton = document.querySelector("#submit");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let previousGuess = [];
let numGuesses = 1;
let playGame = true;

if (playGame) {
  submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    // console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  // Is the guess a number?
  if (isNaN(guess)) {
    alert("Please enter a number.");
  } else if (guess < 1) {
    alert("Please enter a number greater than 1.");
  } else if (guess > 100) {
    alert("Please enter a number less than 100.");
  } else {
    // Is the guess correct?
    previousGuess.push(guess);

    if (numGuesses === 11) {
      displayGuess(guess);
      displayMessage(`Game Over! Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  // Is the guess correct?
  if (guess === randomNumber) {
    displayMessage(`Congratulations! You guessed the number in ${numGuesses}!`);
    endGame();
  } else if (guess > randomNumber) {
    displayMessage("Too high! Try again!");
  } else if (guess < randomNumber) {
    displayMessage("Too low! Try again!");
  }
}

function displayGuess(guess) {
  // Display the guess
  userInput.value = "";
  guessSlot.innerHTML += `${guess} `;
  numGuesses++;
  remaining.innerHTML = `${11 - numGuesses}`;
}

function displayMessage(message) {
  // Display the message
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  // End the game
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  // Reset the game
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function () {
    randomNumber = parseInt(Math.floor(Math.random() * 100) + 1);
    previousGuess = [];
    numGuesses = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuesses}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}
