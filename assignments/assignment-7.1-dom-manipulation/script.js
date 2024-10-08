function addTask() {
  var input = document.getElementById('taskInput');
  var list = document.getElementById('taskList');
  var newItem = document.createElement('li');

// Step 1a
  if (input.value.trim() === "") {
    console.log("Empty string, please add a task.");
    return;
}

// Step 1b
  const text = document.createTextNode(input.value);
  newItem.append(text);

// Step 1c

  const deleteButton = document.createElement('button');
  const deleteButtonText = document.createTextNode("Delete")
  deleteButton.appendChild(deleteButtonText);
  
  newItem.appendChild(deleteButton)
  list.append(newItem)

// Step 2e
  newItem.addEventListener('click', function() {
    completeTask(newItem)
  });

// Step 3
  deleteButton.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent the click event from bubbling up to the <li>
    newItem.remove()
  })

// Step 5

  selectAllTasks();

  input.value = "";

}

// This function is not used yet - sike

function completeTask(task) {
// Step 2d - change add to toggle
  task.classList.toggle('completed');
}

// Step 5

function selectAllTasks() {
  const tasks = document.querySelectorAll('#taskList li');
  tasks.forEach(function(task) {
    task.addEventListener('click', function() {
      completeTask(task);
    });
    createDeleteButton(task);
  });
}

// function createDeleteButton(task) {
//   const deleteButton = document.createElement('button');
//   const deleteButtonText = document.createTextNode("Delete");
//   deleteButton.appendChild(deleteButtonText);
  
//   // Add click event listener to the delete button
//   deleteButton.addEventListener('click', function(event) {
//       event.stopPropagation(); // Prevent click on delete button from marking the task as complete
//       task.remove(); // Remove the task from the list
//   });

//   task.appendChild(deleteButton); // Append the delete button to the task (li)
// }