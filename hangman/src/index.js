import uuidv4 from 'uuid/v4';
import validator from 'validator';
import Hangman from "./hangman"
import getPuzzle from "./request"
const puzzleElement = document.querySelector('#puzzle');
const guessesElement = document.querySelector('#guesses');

console.log(uuidv4());
console.log(validator.isEmail('foo@bar.com'));

let gameOne;

window.addEventListener('keypress', function (e) {
  gameOne.makeGuess(e.key)
  render()
})

const render = () => {
  const puzzleArray = gameOne.puzzle.split('')

  puzzleElement.innerHTML = '';
  guessesElement.textContent = gameOne.statusMessage;
  
  puzzleArray.forEach(letter => {
    const span = document.createElement('span')
    span.textContent = letter
    puzzleElement.appendChild(span)
  });

}

const startGame = async () => {
  const puzzle = await getPuzzle('2')
  gameOne = new Hangman(puzzle, 5)
  render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()