import uuidv4 from 'uuid/v4';
// Setup the empty todos array
let todos = [];

// loadTodos
// Arguments: none
// Return value: none
const loadTodos = () => {
    const todosJSON = localStorage.getItem('todos')
  
    if (todosJSON) {
        todos = JSON.parse(todosJSON);
    } else {
        todos = [];
    }
  }

// saveTodos
// Arguments: none
// Return value: none
const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }

// getTodos
// Arguments: none
// Return value: todos array
const getTodos = () => todos;

// createTodo
// Arguments: todo text
// Return value: none
const createTodo = (textTodo) => {
    loadTodos();
    todos.push({
        id: uuidv4(),
        text: textTodo,
        completed: false
      })
    saveTodos();
}

// removeTodo
// Arguments: id of todo to remove
// Return value: none
const removeTodo = (id) => {
    loadTodos();
    const todoIndex = todos.findIndex((note) => note.id === id);
  
    if (todoIndex > -1) {
      todos.splice(todoIndex, 1)
    }
    saveTodos();
  }

// toggleTodo
// Arguments: id of todo to toggle
// Return value: none
const toggleTodo = (id) => {
    loadTodos();
    const todoIndex = todos.findIndex((note) => note.id === id);

    if (todoIndex => 0) {
        todos[todoIndex].completed = !todos[todoIndex].completed
    }
    saveTodos();
}

// Make sure to call loadTodos and setup the exports
loadTodos();
export { getTodos, createTodo, removeTodo, toggleTodo }