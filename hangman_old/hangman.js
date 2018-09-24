class Hangman {

  constructor(word, tries) {
    this.word = word.toLowerCase().split(''),
      this.tries = tries,
      this.guessedLetters = [],
      this.status = 'playing'
  }

  get puzzle() {
    const displayWord = this.word.map(letter => {
      if (this.guessedLetters.includes(letter) || letter === ' ') {
        return letter;

      } else {
        return '*'
      }
    })

    return displayWord.join('')
  }

  makeGuess(letter) {
    if (this.status === 'playing') {
      const guessedLetter = letter.toLowerCase()

      if (this.word.includes(guessedLetter)) {
        if (!this.guessedLetters.includes(guessedLetter)) {
          this.guessedLetters.push(guessedLetter);
        } else {
          return 'Duplicate Letter'
        }
      } else {
        this.tries -= 1
      }

      this.gameStatus();
    }
  }

  gameStatus() {
    const gameWon = []
    let noSpaceWord = this.word.slice(0)
    noSpaceWord.splice(this.word.indexOf(' '), 1)

    // Alternive I could have use the array.every method to get this two arrays compared
    noSpaceWord.forEach((e) => {
      const includes = this.guessedLetters.includes(e);

      gameWon.push(includes)
    })

    if (this.tries <= 0) {
      this.status = 'failed'
    } else if (!gameWon.includes(false)) {
      this.status = 'completed'
    }
  }

  get statusMessage() {
    if (this.status === 'playing') {
      return `You have ${gameOne.tries} left`
    } else if (this.status === 'failed') {
      return `Nice try! The word was: ${this.word.join('')}`
    } else if (this.status === 'completed') {
      return 'Great work! You guessed the word.'
    }
  }
}



// const Hangman = function (word, tries, guessedLetters = [], status = 'playing') {
//   this.word = word.toLowerCase().split(''),
//     this.tries = tries,
//     this.guessedLetters = guessedLetters,
//     this.status = status
// }

// Hangman.prototype.getPuzzle = function () {

//   const displayWord = this.word.map(letter => {
//     if (this.guessedLetters.includes(letter) || letter === ' ') {
//       return letter;

//     } else {
//       return '*'
//     }
//   })

//   return displayWord.join('')
// }

// Hangman.prototype.makeGuess = function (letter) {

//   if (this.status === 'playing') {
//     const guessedLetter = letter.toLowerCase()

//     if (this.word.includes(guessedLetter)) {
//       if (!this.guessedLetters.includes(guessedLetter)) {
//         this.guessedLetters.push(guessedLetter);
//       } else {
//         return 'Duplicate Letter'
//       }
//     } else {
//       this.tries -= 1
//     }

//     this.gameStatus();
//   }
// }

// Hangman.prototype.gameStatus = function () {
//   const gameWon = []
//   let noSpaceWord = this.word.slice(0)
//   noSpaceWord.splice(this.word.indexOf(' '), 1)

//   // Alternive I could have use the array.every method to get this two arrays compared
//   noSpaceWord.forEach((e) => {
//     const includes = this.guessedLetters.includes(e);

//     gameWon.push(includes)
//   })

//   if (this.tries <= 0) {
//     this.status = 'failed'
//   } else if (!gameWon.includes(false)) {
//     this.status = 'completed'
//   }


// }

// Hangman.prototype.statusMessage = function () {
//   if (this.status === 'playing') {
//     return `You have ${gameOne.tries} left`
//   } else if (this.status === 'failed') {
//     return `Nice try! The word was: ${this.word.join('')}`
//   } else if (this.status === 'completed') {
//     return 'Great work! You guessed the word.'
//   }
// }