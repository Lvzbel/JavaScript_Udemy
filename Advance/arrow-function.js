const square = (num) => num * num;

const squareLong = (num) => {
  return num * num
};

console.log(square(5));

const people = [{
  name: 'rodrigo',
  age: 30
}, {
  name: 'Meme',
  age: 23
}, {
  name: 'Damaris',
  age: 11
}, {
  name: 'Tripiny',
  age: 16
}]

const under30Long = people.filter(function (person) {
  return person.age < 30;
})

const under30 = people.filter((person) => person.age < 30)

console.log(under30);

const sameAge = people.find((person) => person.age === 30)

console.log(sameAge.name)