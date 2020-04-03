
//Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const filterInput = document.querySelector('#filter');
const clearBtn = document.querySelector('.clear-tasks');
const taskInput = document.querySelector('#task');

//Load all event listeners
loadEventListeners();


//Load all event listeners
function loadEventListeners() {

  //DOM Load event
  document.addEventListener('DOMContentLoaded', getTasks);

  //add task event
  form.addEventListener('submit', addTask);

  //Remove task event
  taskList.addEventListener('click', removeTask);

  //clear task event
  clearBtn.addEventListener('click', clearTasks);

  // filter tasks
  filterInput.addEventListener('keyup', filterTasks);

}


//Get tasks from LS

function getTasks() {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function (task) {
    //create li element
    const li = document.createElement('li');

    //add class
    li.className = 'collection-item';

    //create text node and append to the li
    li.appendChild(document.createTextNode(task));

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

  });

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


  //store in local storage
  storeTaskInLocalStorage(taskInput.value);

  //clear input
  taskInput.value = '';

  e.preventDefault();

}


//Store task

function storeTaskInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

//Remove task

function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {

    if (confirm('Are You Sure?')) {
      e.target.parentElement.parentElement.remove();

      //Remove from LS

      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}


//Remove from LS
function removeTaskFromLocalStorage(taskItem) {
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function (task, index) {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}


//Clear Tasks

function clearTasks() {

  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  // Clear from LS

  clearTasksFromLocalStorage();

}


//Clear Tasks from LS
function clearTasksFromLocalStorage() {
  localStorage.clear();
}

// Filter tasks

function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(
    function (task) {
      const item = task.firstChild.textContent;
      if (item.toLowerCase().indexOf(text) != -1) {
        task.style.display = 'block';
      } else {
        task.style.display = 'none';
      }
    }
  )

}
