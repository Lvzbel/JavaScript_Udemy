const array1 = ['l', 'o', 's', ' ', 'a', 'n', 'g', 'e', 'l', 'e', 's']
const array2 = ['l', 's', 'o', 'a', 'g', 'n', 's', 'e']
const arrayIncomple = ['l', 's', 'g', 'n']

let copyArray = array1.slice(0)
copyArray.splice(3, 1)

// console.log(array1.includes(' '))

// copyArray.indexOf(' ')
// copyArray.splice(3, 1)
console.log(copyArray)
console.log(array1)





const testing = function (mainArray, testerArray) {
  const results = []
  mainArray.forEach((e) => {
    const includes = testerArray.includes(e);
    results.push(includes)

  })
  console.log(results)
}





const testing1 = function (mainArray, testerArray) {
  const results = []
  testerArray.forEach((e) => {
    const includes = mainArray.includes(e);
    includes ? results.push(true) : results.push(false)
  })
}

// testing(array1, array2)
// testing(array1, arrayIncomple)