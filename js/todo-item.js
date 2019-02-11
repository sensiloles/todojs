class TodoItem {
  constructor(title) {
    this.title = title;
    this.element = null;
    this.isEditing = false;
    this.init();
  }

  init = () => {
    this.checkbox = createElement('input', {className: 'checkbox', type: 'checkbox', onchange: this.handleToggle},);
    this.title = createElement('label', {className: 'title'}, this.title);
    this.textField = createElement('input', {className: 'textfield', type: 'text'});
    this.buttonEdit = createElement('button', {className: 'edit', onclick: this.handleEdit}, 'Изменить');
    this.buttonDelete = createElement('button', {className: 'delete', onclick: this.handleDelete}, 'Удалить');

    this.element = createElement('li', {className: 'todo-item'}, this.checkbox, this.title, this.textField, this.buttonEdit, this.buttonDelete);
  }

  destroyEvents() {
    this.checkbox.onchange = null;
    this.buttonEdit.onclick = null;
    this.buttonDelete.onclick = null;
  }

  handleToggle = () => {
    this.toggle();
  }

  handleEdit = () => {
    this.edit();
  }

  handleDelete = () => {
    this.remove();
    this.destroyEvents();
  }

  toggle = () => {
    this.element.classList.toggle('completed');
  }

  edit = () => {
    if (!this.isEditing) {
      this.isEditing = true;
      this.textField.value = this.title.innerHTML;
      this.element.classList.toggle('editing');
      this.buttonEdit.innerHTML = 'Сохранить';
    } else {
      this.title.innerHTML = this.textField.value;
      this.element.classList.toggle('editing');
      this.buttonEdit.innerHTML = 'Изменить';
      this.isEditing = false;
    }
  }

  remove = () => {
    const parent = document.querySelector('.todo-list');
    parent.removeChild(this.element);
  }
}