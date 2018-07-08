
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

getCountry('SV',(error, country) => {
  if(error) {
    console.log(error);
  } else {
    console.log(country.name)
  }
})
