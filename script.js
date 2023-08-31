// script.js
let form = document.getElementById('todo-form');
let input = document.getElementById('todo-input');
let list = document.getElementById('todo-list');

// Load tasks from local storage
window.addEventListener('load', function() {
  for (let i = 0; i < localStorage.length; i++) {
    addTaskToList(localStorage.key(i));
  }
});

form.addEventListener('submit', function(event) {
  event.preventDefault();

  let task = input.value;
  input.value = '';

  addTaskToList(task);
  localStorage.setItem(task, task);
});

function addTaskToList(task) {
  let listItem = document.createElement('li');
  listItem.textContent = task;
  listItem.addEventListener('click', function() {
    listItem.remove();
    localStorage.removeItem(task);
  });

  list.appendChild(listItem);
}
