class Person {
  constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName,
      this.lastName = lastName,
      this.age = age,
      this.likes = likes
  }

  getBio() {
    let bio = `${this.firstName} is ${this.age}.`

    this.likes.forEach((like) => {
      bio += ` ${this.firstName} likes ${like}.`
    })

    return bio
  }

  set fullName(fullName) {
    const name = fullName.split(' ');
    this.firstName = name[0]
    this.lastName = name[1]
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

class Employee extends Person {
  constructor(firstName, lastName, age, position, likes) {
    super(firstName, lastName, age, likes)
    this.position = position
  }

  getBio() {
    return `${this.firstName} ${this.lastName} is a ${this.position}.`
  }

  getYearsLeft() {
    return 65 - this.age
  }
}

class Student extends Person {
  constructor(firstName, lastName, age, likes, grade) {
    super(firstName, lastName, age, likes)
    this.grade = grade
  }

  getBio() {
    if (this.grade >= 70) {
      return `${this.firstName} is passing class with a grade of ${this.grade}`
    } else {
      return `${this.firstName} is failing the class with a grade of ${this.grade}`
    }
  }

  updateGrade(addPoints) {
    this.grade += addPoints;
  }
}

const student1 = new Employee ('Rodrigo', 'Coto', 30, 'Web Dev', [])
console.log(student1.getBio())
student1.fullName = 'Damarina Coto'

// const me = new Employee('Rodrigo', 'Coto', 30, 'Web Dev', ['Games', 'Cars', 'Programming']);
// me.setName('Pedo Nalgas')
// console.log(me.getBio());
// console.log(`Years until retirement ${me.getYearsLeft()}`)

// const person2 = new Person('Damarina', 'Coto', 11, ['Swimming', 'Cooking', 'Dancing']);
// console.log(person2.getBio())

// const Person = function (firstName, lastName, age, likes = []) {
//   this.firstName = firstName,
//     this.lastName = lastName,
//     this.age = age,
//     this.likes = likes
// };

// Person.prototype.getBio = function () {
//   let bio = `${this.firstName} is ${this.age}.`

//   this.likes.forEach((like) => {
//     bio += ` ${this.firstName} likes ${like}.`
//   })

//   return bio
// }

// Person.prototype.setName = function (fullName) {
//   const name = fullName.split(' ');
//   this.firstName = name[0]
//   this.lastName = name[1]
// }

