// Function to add a task
function addTask() {
  var input = document.getElementById('taskInput');
  var taskValue = input.value; 
  var list = document.getElementById('taskList');

  // Error handling: Check if the input is empty
  if (taskValue === "") {
      alert("Task cannot be empty. Please enter a valid task.");
      return;  // Exit the function if input is empty
  }

  // Create a new list item (li) and a delete button
  var newItem = document.createElement('li');
  var taskText = document.createTextNode(taskValue);
  var deleteButton = document.createElement('button');
  
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'delete-btn';

  // Add the task text to the new list item
  newItem.appendChild(taskText);

  // Add the delete button to the new list item
  newItem.appendChild(deleteButton);

  // Add the new task to the list
  list.appendChild(newItem);

  // Add event listeners for toggling complete and deleting the task
  newItem.addEventListener('click', completeTask);
  deleteButton.addEventListener('click', deleteTask);

  // Clear the input field after adding the task
  input.value = '';
}

// Function to toggle the 'completed' class on/off
function completeTask(event) {
  if (event.target.tagName === 'LI') {  // Make sure only the li element responds
      event.target.classList.toggle('completed');
  }
}

// Function to delete a task
function deleteTask(event) {
  event.stopPropagation();  // Prevent triggering the completeTask event
  var taskToDelete = event.target.parentElement;  // Select the parent li
  taskToDelete.remove();
}

// Optional: Add editing functionality
function editTask(event) {
  var taskToEdit = event.target;
  if (taskToEdit.tagName === 'LI') {
      var newTaskValue = prompt("Edit your task:", taskToEdit.textContent.replace('Delete', '').trim());
      if (newTaskValue) {
          taskToEdit.firstChild.nodeValue = newTaskValue;  // Update the text node value
      }
  }
}

// Add event listeners to existing tasks on page load
document.querySelectorAll('#taskList li').forEach(function(task) {
  task.addEventListener('click', completeTask);

  // Add delete button and its event listener to existing tasks
  var deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'delete-btn';
  task.appendChild(deleteButton);
  deleteButton.addEventListener('click', deleteTask);
});
