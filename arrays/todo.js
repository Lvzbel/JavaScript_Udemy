const todos = [{
  task: 'Order cat food',
  completed: false
}, {
  task: 'Clean kitchen',
  completed: true
}, {
  task: 'Buy food',
  completed: false
}, {
  task: 'Do work',
  completed: true
}, {
  task: 'Exercise',
  completed: false
}];

const deleteTodo = function (todosList, task) {
  const index = todosList.findIndex(function (todo, index) {
    return todo.task.toLowerCase() === task.toLowerCase();
  })
  if(index > -1) {
    todosList.splice(index, 1)
  }
}

const getThingsTodo = function(todos) {
  return todos.filter(function(todo, index) {
    return !todo.completed;
  })
}

const sortTodos = function(todos) {
  todos.sort(function (a, b) {
    if (!a.completed && b.completed){
      return -1;
    } else if (!b.completed && a.completed) {
      return 1;
    } else {
      return 0;
    }
  })
}

sortTodos(todos);
console.log(todos);

// console.log(getThingsTodo(todos));


// deleteTodo(todos, 'buy food');
// console.log(todos);




// todos.splice(2, 1);
// todos.push('Buy coffee');
// todos.shift();

// console.log(`You have ${todos.length} todos!`);


// console.log('Here is your list of Todos:')

// todos.forEach(function (item, index) {
//   let todoIndex = index + 1;
//   console.log(`${todoIndex}. ${item}`); 
// })

// console.log('With a for loop now...');

// for (let count = 0; count < todos.length; count++) {
//   console.log(`${count + 1}. ${todos[count]}`);
// }