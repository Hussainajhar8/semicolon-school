let toDoList = []

let numberOfTask = 0

function addTask(task) {
  let toDo = {
    id: numberOfTask,
    task: task,
    done: false
  }
  toDoList.push(toDo)
  numberOfTask = numberOfTask + 1
  console.log('Added: ' + task)
}

function checkOffTask(id) {
  for (let i = 0; i < toDoList.length; i++) {
    if (toDoList[i].id == id) {
      toDoList[i].done = true
      console.log('Completed: ' + toDoList[i].task)
      return
    }
  }
  console.log('Not found')
}

function dismissTask(id) {
  for (let i = 0; i < toDoList.length; i++) {
    if (toDoList[i].id == id) {
      let dismiss = toDoList.splice(i, 1)
      console.log('Deleted: ' + dismiss[0].task)
      return
    }
  }
  console.log('Not found')
}

function displayTasks() {
  console.log('toDo list:')
  for (let i = 0; i < toDoList.length; i++) {
    let taskStatus = toDoList[i].done ? 'Done' : 'Pending'
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