"use strict";
exports.__esModule = true;
var todoImpl_1 = require("./todoImpl");
var todos = [];
var newTodo = new todoImpl_1.TodoImpl();
newTodo.setTodoId("task1");
newTodo.setTask("hello to string id");
todos.push(newTodo);
newTodo = new todoImpl_1.TodoImpl();
newTodo.setTodoId(1);
newTodo.setTask("hello to string id");
todos.push(newTodo);
todos.map(function (task) { return console.log("" + task); });
// // let todoManager = new TodoManager();
// newTodo.setTodoId(1);
// newTodo.setTask("hello to int id");
// todoManager.add(newTodo);
// let todos = todoManager.get();
// todos.map((todo:Todo) => console.log(""+todo))
