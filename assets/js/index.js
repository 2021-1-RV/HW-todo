const todoInput = document.querySelector('.toDoPhInput')
const todoButton = document.querySelector('.toDoButton')
const todoList = document.querySelector('.toDoList')

todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', completeDelete)

function addTodo(event) {
  event.preventDefault()

  const todoDiv = document.createElement('div')
  todoDiv.classList.add('todo')

  const newTodo = document.createElement('li')
  newTodo.innerText = new Date().toLocaleString() + ' - ' + todoInput.value
  todoDiv.appendChild(newTodo)
  if (todoInput.value === '') {
    return null
  }

  const completedButton = document.createElement('button')
  completedButton.innerHTML = '<p class="toDoSubmit toDoDone"></p>'
  completedButton.classList.add('completeBtn')
  todoDiv.appendChild(completedButton)

  const deleteButton = document.createElement('button')
  deleteButton.innerHTML = '<p class="toDoSubmit toDoDelete"></p>'
  deleteButton.classList.add('deleteBtn')
  todoDiv.appendChild(deleteButton)

  todoList.appendChild(todoDiv)
  todoInput.value = ''
  localStorage.setItem('ToDo', todoList.innerHTML)
}

function completeDelete(e) {
  const item = e.target

  if (item.classList[0] === 'completeBtn') {
    const todo = item.parentElement
    todo.classList.toggle('completedItem')
    localStorage.setItem('ToDo', todoList.innerHTML)
  }

  if (item.classList[0] === 'deleteBtn') {
    const todo = item.parentElement
    todo.classList.add('fall')
    todo.addEventListener('transitionend', function () {
      todo.remove()
      localStorage.setItem('ToDo', todoList.innerHTML)
    })
  }
}

todoList.innerHTML = localStorage.getItem('ToDo')
