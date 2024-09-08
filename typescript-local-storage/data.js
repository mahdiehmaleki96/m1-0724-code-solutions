'use strict';
function writeTodos(todos) {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('todos-storage', todosJSON);
}
function readTodos() {
  const todosJSON = localStorage.getItem('todos-storage');
  return todosJSON ? JSON.parse(todosJSON) : [];
}
let todos = readTodos();
