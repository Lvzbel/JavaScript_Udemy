import { getFilters } from './filters'
import { getTodos, removeTodo, toggleTodo } from './todos'
// renderTodos
// Arguments: none
// Return value: none
const renderTodos = () => {
    const todos = getTodos();
    const filters = getFilters()
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

// generateTodoDOM
// Arguments: todo
// Return value: the todo element
const generateTodoDOM = (todo) => {
    const todoDiv = document.createElement('label');
    const containerEl = document.createElement('div');
    const checkbox = document.createElement('input');
    const singleTodo = document.createElement('span');
    const button = document.createElement('button');
  
    // Setting div's inside structure
    checkbox.setAttribute('type', 'checkbox')
    if (todo.completed === true) {
        checkbox.checked = true
    }
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
      renderTodos();
    })

    checkbox.addEventListener('change', (e) => {
        toggleTodo(todo.id)
        renderTodos()
    })
  
    return todoDiv
  }

// generateSummaryDOM
// Arguments: incompletedTodos
// Return value: the summary element
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

// Make sure to set up the exports

export { renderTodos }