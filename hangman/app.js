
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

getPuzzle('2').then((puzzle) => {
  console.log(puzzle)
}, (err) => {
  console.log(`Error: ${err}`)
})

getCountry('SV').then((country) => {
  console.log(`Country Name: ${country.name}`)
}, (err) => {
  console.log(`Error: ${err}`)
})
