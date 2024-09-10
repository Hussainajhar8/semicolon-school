var todos = []
var c = 0

function a(t) {
  var todo = {
    id: c,
    task: t,
    done: false
  }
  todos.push(todo)
  c = c + 1
  console.log('Added: ' + t)
}

function b(id) {
  for (var i = 0; i < todos.length; i++) {
    if (todos[i].id == id) {
      todos[i].done = true
      console.log('Completed: ' + todos[i].task)
      return
    }
  }
  console.log('Not found')
}

function c(id) {
  for (var i = 0; i < todos.length; i++) {
    if (todos[i].id == id) {
      var d = todos.splice(i, 1)
      console.log('Deleted: ' + d[0].task)
      return
    }
  }
  console.log('Not found')
}

function d() {
  console.log('Todo list:')
  for (var i = 0; i < todos.length; i++) {
    var s = todos[i].done ? 'Done' : 'Pending'
    console.log(todos[i].id + ': ' + todos[i].task + ' - ' + s)
  }
}

// Usage
a('Buy groceries')
a('Finish homework')
b(0)
d()
c(1)
d()