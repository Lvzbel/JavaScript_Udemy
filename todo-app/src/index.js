// Set up index.html to load the bundle
// Make sure to load uuid via an npm module when necessary

// --

// Add necessary imports
import { setFilters } from './filters'
import { createTodo } from './todos'
import { renderTodos } from './views'

// Render initial todos
renderTodos();

// Set up search text handler
document.querySelector('#search-text').addEventListener('input', (e) => {
    const filters = {
        searchText: e.target.value
      } 
    setFilters(filters)
    renderTodos()
  })

// Set up checkbox handler
document.querySelector('#hide-completed').addEventListener('change', (e) => {
    const filters = {
        hideCompleted: e.target.checked
      }
    setFilters(filters)
    renderTodos()
  })

// Set up form submission handler
document.querySelector('#new-todo').addEventListener('submit', (e) => {
    e.preventDefault()
    const textTodo = e.target.elements.text.value.trim();
      
    if (textTodo.length > 0) {
      createTodo(textTodo);
      renderTodos()
      e.target.elements.text.value = ''
    }
  })

// Bonus: Add a watcher for local storage