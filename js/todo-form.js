class TodoForm {
  constructor(element) {
    this.element = element;
    this.onSubmit = () => {};
    this.init();
  }

  init = () => {
    this.element.querySelector('.add-button')
      .addEventListener('click', this.handleClickButtonAdd);
  }

  handleClickButtonAdd = (event) => {
    event.preventDefault();
    const addInputValue = this.element.querySelector('.add-input').value;

    if (!addInputValue) {
      alert('Необходимо ввести название задачи')
    } else {
      this.onSubmit();
    }
  }
}