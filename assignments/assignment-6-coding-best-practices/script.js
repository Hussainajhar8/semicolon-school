var toDoList = []

var numberOfTask = 0

function addTask(task) {
  var toDo = {
    id: numberOfTask,
    task: task,
    done: false
  }
  toDoList.push(toDo)
  numberOfTask = numberOfTask + 1
  console.log('Added: ' + task)
}

function checkOffTask(id) {
  for (var i = 0; i < toDoList.length; i++) {
    if (toDoList[i].id == id) {
      toDoList[i].done = true
      console.log('Completed: ' + toDoList[i].task)
      return
    }
  }
  console.log('Not found')
}

function dismissTask(id) {
  for (var i = 0; i < toDoList.length; i++) {
    if (toDoList[i].id == id) {
      var dismiss = toDoList.splice(i, 1)
      console.log('Deleted: ' + dismiss[0].task)
      return
    }
  }
  console.log('Not found')
}

function displayTasks() {
  console.log('toDo list:')
  for (var i = 0; i < toDoList.length; i++) {
    var taskStatus = toDoList[i].done ? 'Done' : 'Pending'
    console.log(toDoList[i].id + ': ' + toDoList[i].task + ' - ' + taskStatus)
  }
}

// Usage
addTask('Buy groceries')
addTask('Finish homework')
checkOffTask(0)
displayTasks()
dismissTask(1)
displayTasks()