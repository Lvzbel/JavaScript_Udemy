let isAccountLocked = true;
let userRole = 'user';

if (isAccountLocked) {
  console.log('Account is locked')
} else if (userRole === 'admin') {
  console.log('Welcome Admin')
} else {
  console.log('Welcome')
}

let temp = 80;

if (temp <= 35) {
  console.log('It is freezing outside')
} else if (temp >= 90) {
  console.log('It is hot outside!')
} else {
  console.log('Go for it. It is pretty nice outside')
}