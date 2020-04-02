
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
  //add task event
  form.addEventListener('submit', addTask);

  //Remove task event
  taskList.addEventListener('click', removeTask);

  //clear task event
  clearBtn.addEventListener('click', clearTasks);

  // filter tasks
  filterInput.addEventListener('keyup', filterTasks);

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


//Remove task

function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {

      if( confirm('Are You Sure?')) {
        e.target.parentElement.parentElement.remove();
      }
  }
}


//Clear Tasks

function clearTasks (){

  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }


}

// Filter tasks

function filterTasks(e){
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(
    function(task){
      const item = task.firstChild.textContent;
      if(item.toLowerCase().indexOf(text) != -1){
        task.style.display = 'block';
      }else {
        task.style.display = 'none';
      }
    }
  )

}