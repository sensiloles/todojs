new App(
  document.querySelector('.app'),
  new TodoList(document.querySelector('.todo-list')),
  new TodoForm(document.querySelector('.todo-form'))
);