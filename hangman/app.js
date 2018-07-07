
const puzzleElement = document.querySelector('#puzzle');
const guessesElement = document.querySelector('#guesses');

const gameOne = new Hangman('Los Angeles', 5);

puzzleElement.textContent = gameOne.puzzle;
guessesElement.textContent = gameOne.statusMessage;

window.addEventListener('keypress', function (e) {
  gameOne.makeGuess(e.key)
  puzzleElement.textContent = gameOne.puzzle;
  guessesElement.textContent = gameOne.statusMessage;
})

getPuzzle((error, puzzle) => {
  if(error) {
    console.log(`Error: ${error}`)
  } else {
    console.log(puzzle)
  }
})

// Making an HTTP request


// request.open('GET', 'http://restcountries.eu/rest/v2/all')
// request.send();
