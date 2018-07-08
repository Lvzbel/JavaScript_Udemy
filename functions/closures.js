const createCounter = () => {
  let count = 0

  return {
    increment() {
      count++
    }, 
    decrement() {
      count--
    }, 
    get() {
      return count
    }
  }
}

const counter = createCounter();
counter.increment()
counter.decrement()
counter.decrement()
console.log(counter.get())

const createAdder = (a) => {
  return(b) => {
    return a + b
  }
}

const add10 = createAdder(10)
console.log(add10(20))

// Tip Closure
const addTip = (percentTip) => {
  return (billAmount) => {
    return ((percentTip / 100) * billAmount) + billAmount
  }
}

const tip15 = addTip(15)
console.log(`Total with tip included is: ${tip15(100)}`)