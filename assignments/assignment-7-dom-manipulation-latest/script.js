function addTask() {
  var input = document.getElementById('taskInput');
  var list = document.getElementById('taskList');
  var newItem = document.createElement('li');

// Step 1a - Check if the input is empty before adding a task
  if (input.value.trim() === "") {
    console.log("Empty string, please add a task.");
    return;
}

// Step 1b - Create a text node instead of using innerHTML
  const text = document.createTextNode(input.value);
  newItem.append(text);

// Step 1c - Add a delete button next to each new task

  // const deleteButton = document.createElement('button'); - Creates the button element
  // const deleteButtonText = document.createTextNode("Delete") - Creates the text for the button
  // deleteButton.appendChild(deleteButtonText); - Adds the text to the button
  
  // newItem.appendChild(deleteButton) - Adds the button to the item

  createDeleteButton(newItem) // Calls the createDeleteButton function which was created for the querySelectorAll task
  list.append(newItem) // Adds the new task to the list

// Step 2e - Make it listen to a click event on each task
  newItem.addEventListener('click', function() {
    completeTask(newItem)
  });

// // Step 3
//   deleteButton.addEventListener('click', function(event) { // Step 3g - Make it listen to the delete button for each task
//     event.stopPropagation(); // Prevent the click event from bubbling up to the <li>
//     newItem.remove() // Step 3f - It should remove the task from the list
//   })

  input.value = "";

}

// This function is not used yet - sike (It should toggle the ‘completed’ class on and off)

function completeTask(task) {
  // Step 2d - change add to toggle
    task.classList.toggle('completed');
}
  
// Step 5 - Use `querySelectorAll` to select all tasks and loop through them to add event listeners

function selectAllTasks() {
  const tasks = document.querySelectorAll('#taskList li');
  tasks.forEach(function(task) {
    task.addEventListener('click', function() {
      completeTask(task); // Call completeTask on click
    });

    // Create and append delete button for each task
    createDeleteButton(task);
  });
}

// Commented Out Step 1c, 3f and 3g to make this function which'll be used by Step5 function to add a delete button to all tasks
function createDeleteButton(task) {
  if (task.querySelector('button')) {
    return; // Exit the function if a delete button already exists
  }
  const deleteButton = document.createElement('button');
  const deleteButtonText = document.createTextNode("Delete");
  deleteButton.appendChild(deleteButtonText);
  
  // Add click event listener to the delete button
  deleteButton.addEventListener('click', function(event) {
      event.stopPropagation(); // Prevent click on delete button from marking the task as complete
      task.remove(); // Remove the task from the list
  });

  task.appendChild(deleteButton); // Append the delete button to the task (li)
}

selectAllTasks(); // Called function from step 5