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

// ==============================================================
// Render application todos based on filters
// ==============================================================
const renderTodos = (todos, filters) => {
  const todoEl = document.querySelector('#todos')
  const filteredTodos = todos.filter((todo) => {
    const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed

    return searchTextMatch && hideCompletedMatch
  })

  const incompleteTodos = filteredTodos.filter((todo) => !todo.completed);

  todoEl.innerHTML = ''
  todoEl.appendChild(generateSummaryDOM(incompleteTodos))

  if (filteredTodos.length > 0) {
    filteredTodos.forEach((todo) => {
      todoEl.appendChild(generateTodoDOM(todo))
    })
  } else {
    const messageEl = document.createElement('p')
    messageEl.classList.add('empty-message')
    messageEl.textContent = 'No  to-dos to show'
    todoEl.appendChild(messageEl)
  }
}

// ==============================================================
// Get the DOM elements for an individual note
// ==============================================================
const generateTodoDOM = (todo) => {
  const todoDiv = document.createElement('label');
  const containerEl = document.createElement('div');
  const checkbox = document.createElement('input');
  const singleTodo = document.createElement('span');
  const button = document.createElement('button');

  // Setting div's inside structure
  checkbox.setAttribute('type', 'checkbox')
  containerEl.appendChild(checkbox);

  // Setup container
  singleTodo.textContent = todo.text;
  containerEl.appendChild(singleTodo);

  // Setup Container
  todoDiv.classList.add('list-item')
  containerEl.classList.add('list-item__container')
  todoDiv.appendChild(containerEl)

  button.textContent = 'remove';
  button.classList.add('button', 'button--text')
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
  summary.classList.add('list-title')
  let todoWord = 'todos'
  
  if (incompleteTodos.length === 1) {
    todoWord = 'todo'
  }

  summary.textContent = `You have ${incompleteTodos.length} ${todoWord} left`

  return summary
}