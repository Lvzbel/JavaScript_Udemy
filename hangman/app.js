
const puzzleElement = document.querySelector('#puzzle');
const guessesElement = document.querySelector('#guesses');

let gameOne

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
// getPuzzle('2').then((puzzle) => {
//   console.log(puzzle)
// }).catch((err) => {
//   console.log(err)
// })

// getCountry('SV').then((country) => {
//   console.log(country.name);
// }).catch((err) => {
//   console.log(err);
// })

// getLocation().then((data) => {
//   console.log(`City: ${data.city}, Region: ${data.region}, Country: ${data.country}`);
// }).catch((err) => {
//   console.log(err)
// })

// getLocation().then((data) => {
//   return getCountry(data.country)
// }).then((country) => {
//     console.log(`Based on your IP you are currently located in ${country.name}`)
// }).catch((err) => {
//   console.log(err)
// })

// getCurrentCountry().then((country) => {
//   console.log(`Coming from challenge: `, country.name);
// }).catch((error) => {
//   console.log(error)
// })

// getCountry('SV').then((country) => {
//   console.log(`Country Name: ${country.name}`)
// }, (err) => {
//   console.log(`Error: ${err}`)
// })

// fetch('http://puzzle.mead.io/puzzle', {}).then((response) => {
//   if (response.status === 200) {
//     return response.json()
//   } else {
//     throw new Error('Unable to fetch the puzzle')
//   }
// }).then((data) => {
//   console.log(data.puzzle)
// }).catch((err) => {
//   console.log(err)
// })