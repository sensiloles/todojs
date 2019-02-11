import App from './app';
import TodoList from './todo-list';
import TodoForm from './todo-form';

new App(
  document.querySelector('.app'),
  new TodoList(document.querySelector('.todo-list')),
  new TodoForm(document.querySelector('.todo-form'))
);