// Function to add a task
function addTask() {
  // Get the input element and task list
  const input = document.getElementById('taskInput');
  const taskValue = input.value.trim();  // Trim input to remove extra spaces
  const list = document.getElementById('taskList');

  // Error handling: Check if the input is empty
  if (taskValue === "") {
      alert("Task cannot be empty. Please enter a valid task.");  // Display an error if input is empty
      return;  // Exit the function if there's no task to add
  }

  // Create a new list item (li) and a text node for the task
  const newItem = document.createElement('li');
  const taskText = document.createTextNode(taskValue);  // Text node for the task description

  // Create a delete button for the task
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';  // Set button text
  deleteButton.className = 'delete-btn';  // Add a class for styling if needed

  // Append the task text and delete button to the new list item (li)
  newItem.appendChild(taskText);
  newItem.appendChild(deleteButton);

  // Add the new task to the task list (ul)
  list.appendChild(newItem);

  // Add event listeners:
  // 1. For toggling the completed state (click on task text)
  newItem.addEventListener('click', completeTask);

  // 2. For deleting the task (click on delete button)
  deleteButton.addEventListener('click', deleteTask);

  // Clear the input field after the task is added
  input.value = '';
}

// Function to toggle the 'completed' class on/off for a task
function completeTask(event) {
  // Ensure only the list item (li) triggers the toggle, not the delete button
  if (event.target.tagName === 'LI') {
      event.target.classList.toggle('completed');  // Toggle the 'completed' class (strike-through effect)
  }
}

// Function to delete a task
function deleteTask(event) {
  event.stopPropagation();  // Stop the click event from bubbling up to the list item (prevents triggering completeTask)
  const taskToDelete = event.target.parentElement;  // Get the parent list item (li) of the clicked delete button
  taskToDelete.remove();  // Remove the task (li) from the DOM
}

// Optional: Function to edit a task when clicked
function editTask(event) {
  const taskToEdit = event.target;  // The task item (li) that was clicked
  if (taskToEdit.tagName === 'LI') {
      // Prompt the user to edit the task text
      const newTaskValue = prompt("Edit your task:", taskToEdit.textContent.replace('Delete', '').trim());  // Remove 'Delete' from the text
      if (newTaskValue) {
          taskToEdit.firstChild.nodeValue = newTaskValue;  // Update the text node with the new task value
      }
  }
}

// Add event listeners to existing tasks on page load
document.querySelectorAll('#taskList li').forEach(function(task) {
  // Add the event listener to toggle the completed state for each task
  task.addEventListener('click', completeTask);

  // Create and add the delete button for each existing task
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';  // Set button text
  deleteButton.className = 'delete-btn';  // Add class for styling if needed
  task.appendChild(deleteButton);  // Append the delete button to the list item (li)

  // Add the event listener for deleting the task
  deleteButton.addEventListener('click', deleteTask);
});