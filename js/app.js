class App {
  constructor(element, todoList, todoForm) {
    this.element = element;
    this.todoList = todoList;
    this.todoForm = todoForm;

    this.init();
  }

  init = () => {
    this.todoForm.onSubmit = this.todoList.add.bind(this.todoList);
  }
}