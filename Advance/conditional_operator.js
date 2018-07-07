// const myAge = 30
// // Conditional Operator
// const message = myAge >= 18 ? 'You can vote!' : 'You cannot vote.'

// if(myAge >= 18){
//   message = 'You can vote!'
// } else {
//   message = 'You cannot vote.'
// }

const myAge = 20;
const showPage = () => {
  console.log('Showing the page')
};

const showErrorPage = () => {
  console.log('Showing the error page')
};

myAge >= 21 ? showPage() : showErrorPage();

const team = ['Damaris', 'Tripiny', 'Memito']

console.log(team.length <= 4 ? `Team size: ${team.length}` : 'Too many people on your team')