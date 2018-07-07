let name = 'Rodrigo Coto';

// Length Property
console.log(name.length);

// Convert to upper case
console.log(name.toUpperCase());

// Convert to lower case
console.log(name.toLowerCase());

// Includes method
let password = 'abc123password098'
console.log(password.includes('password'));

// Trim removes white space at the begining or end
let trimName = ' Rodrigo Coto ';
console.log(trimName.trim());

let isValidPassword = function (password) {
  return password.length >= 8 && !password.includes('password');
}

console.log(isValidPassword('Hellosmynameispedo'));
console.log(isValidPassword('hello'));
console.log(isValidPassword('asdfakjasdfkajkjasdfpassword'));