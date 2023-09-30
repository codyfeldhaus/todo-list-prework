// script.js

//create variables to store the necessary HTML elements
let form = document.getElementById('todo-form'); //finds the html element with id 'todo-form' and saves it as form
let input = document.getElementById('todo-input');
let list = document.getElementById('todo-list');

// Load tasks from local storage
//'waiting' for the window to undergo the 'load' event
//then runs the given function
window.addEventListener('load', function() {
  //loop through the local storage
  for (let i = 0; i < localStorage.length; i++) {
    //add each item (if any) to the task list
    addTaskToList(localStorage.key(i));
  }
});


//'waiting' for the form to undergo the 'submit' event
//then it runs the function given
form.addEventListener('submit', function(event) {
  event.preventDefault(); //should almost always be present for form submit buttons

  //stores the current text inside of the input in a variable called task
  let task = input.value;
  
  //clears out the input box
  input.value = '';

  //run the addTaskToList function to add the task to our list
  addTaskToList(task);

  //update our local storage
  localStorage.setItem(task, task); //localStorage uses object notation -> key, value pairs
});

/*localStorage: {
  'do dishes': 'do dishes',
  'call mom': 'call mom
}
*/

//take in a task and add it to our task list
function addTaskToList(task) {

  //create a blank li element that will be used to add our task to the ul list
  let listItem = document.createElement('li');
  //let newElement = document.createElement("h1")

  //set the text of that element
  listItem.textContent = task;

  //'waiting' for the list item to undergo the 'click' event
  //and run the given function
  listItem.addEventListener('click', function() {
    //removes the list item
    listItem.remove();
    //updates the local storage
    localStorage.removeItem(task);
  });

  //appends the task to the ul that we have saved in the list variable
  list.appendChild(listItem);
}
