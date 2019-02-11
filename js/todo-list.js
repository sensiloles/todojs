class TodoList {
  constructor(element) {
    this.element = element;
    this.todoItem = null;
    this.init();
  }

  init = () => {
    //TODO: fix info message
    // if (!this.element.firstElementChild) {
    //   this.message = document.createElement('div');
    //   this.messageessage.classList = 'info';
    //   this.message.innerHTML = 'Нет задач'
    //   this.element.appendChild(this.message);
    // }
    this.addInput = document.querySelector('.add-input');
  }

  add = () => {
    this.todoItem = new TodoItem(this.addInput.value).element;
    this.element.appendChild(this.todoItem);
    this.addInput.value = null;
  }
}