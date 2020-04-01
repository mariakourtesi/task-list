//Define UI Vars

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const filterInput = document.querySelector('#filter');
const clearBtn = document.querySelector('.clear-tasks');
const taskInput = document.querySelector('#task');

//Load all event listeners

loadEventListeners();

function loadEventListeners() {
  //add task event

  form.addEventListener('submit', addTask);



}


//add task

function addTask(e) {

  if (taskInput.value === '') {
    alert('add a task');
  }


  //create li element

  const li = document.createElement('li');

  //add class

  li.className = 'collection-item';

  //create text node and append to the li

  li.appendChild(document.createTextNode(taskInput.value));

  //create new link element

  const link = document.createElement('a');

  //add a class

  link.className = 'delete-item secondary-content';

  //add ivon html
  link.innerHTML = '<i class= "fa fa-remove"></i>';

  //append it to li

  li.appendChild(link);

  //append the li to ul

  taskList.appendChild(li);

  //clear input

  taskInput.value = '';

  e.preventDefault();

}