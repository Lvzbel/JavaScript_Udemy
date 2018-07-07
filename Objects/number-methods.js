let makeGuess = function(number) {
  let min = 1;
  let max = 5;
  let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(`Target: ${randomNum}`);
  return randomNum === number;
}

console.log(makeGuess(1));
console.log(makeGuess(1));
console.log(makeGuess(1));
console.log(makeGuess(1));
console.log(makeGuess(1));
console.log(makeGuess(1));