
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
}).catch((err) => {
  console.log(err)
})

getCountry('SV').then((country) => {
  console.log(country.name);
}).catch((err) => {
  console.log(err);
})

getLocation().then((data) => {
  console.log(`City: ${data.city}, Region: ${data.region}, Country: ${data.country}`);
}).catch((err) => {
  console.log(err)
})

getLocation().then((data) => {
  return getCountry(data.country)
}).then((country) => {
    console.log(`Based on your IP you are currently located in ${country.name}`)
}).catch((err) => {
  console.log(err)
})
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