'use strict'

// ==============================================================
// Fetch existing todos from localStorage
// ==============================================================
const getSavedTodos = () => {
  const todosJSON = localStorage.getItem('todos')
  
  try {
    return todosJSON ? JSON.parse(todosJSON) : []
  } catch (e) {
    return []
  } 
}

// ==============================================================
// Save todos to localStorage
// ==============================================================
const saveTodos = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos))
}

// Render application todos based on filters
const renderTodos = (todos, filters) => {
  const filteredTodos = todos.filter((todo) => {
    const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed

    return searchTextMatch && hideCompletedMatch
  })

  const incompleteTodos = filteredTodos.filter((todo) => !todo.completed);

  document.querySelector('#todos').innerHTML = ''
  document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))

  filteredTodos.forEach((todo) => {
    document.querySelector('#todos').appendChild(generateTodoDOM(todo))
  })
}

// ==============================================================
// Get the DOM elements for an individual note
// ==============================================================
const generateTodoDOM = (todo) => {
  const todoDiv = document.createElement('div');
  const checkbox = document.createElement('input');
  const singleTodo = document.createElement('span');
  const button = document.createElement('button');

  // Setting div's inside structure
  checkbox.setAttribute('type', 'checkbox')
  todoDiv.appendChild(checkbox);

  singleTodo.textContent = todo.text;
  todoDiv.appendChild(singleTodo);

  button.textContent = 'x';
  todoDiv.appendChild(button);
  button.addEventListener('click', () => {
    removeTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  })
  return todoDiv
}

// ==============================================================
// Remove todo by ID
// ==============================================================
const removeTodo = (id) => {
  const todoIndex = todos.findIndex((note) => note.id === id);

  if (todoIndex > -1) {
    todos.splice(todoIndex, 1)
  }
}
// ==============================================================
// Get the DOM elements for list summary
// ==============================================================
const generateSummaryDOM = (incompleteTodos) => {
  const summary = document.createElement('h2')
  summary.textContent = `You have ${incompleteTodos.length} todos left`
  return summary
}