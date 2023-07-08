// script.js
var form = document.getElementById('todo-form');
var input = document.getElementById('todo-input');
var list = document.getElementById('todo-list');

// Load tasks from local storage
window.addEventListener('load', function() {
  for (var i = 0; i < localStorage.length; i++) {
    addTaskToList(localStorage.key(i));
  }
});

form.addEventListener('submit', function(event) {
  event.preventDefault();

  var task = input.value;
  input.value = '';

  addTaskToList(task);
  localStorage.setItem(task, task);
});

function addTaskToList(task) {
  var listItem = document.createElement('li');
  listItem.textContent = task;
  listItem.addEventListener('click', function() {
    listItem.remove();
    localStorage.removeItem(task);
  });

  list.appendChild(listItem);
}
