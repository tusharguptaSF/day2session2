import {Todo} from './Todo';
// import { TodoManager } from './todoManager';
import { TodoImpl } from './todoImpl';

let todos:Array<Todo> = [];
let newTodo:Todo = new TodoImpl();
 newTodo.setTodoId("task1");
 newTodo.setTask("hello to string id");
 todos.push(newTodo);

 newTodo = new TodoImpl();

 newTodo.setTodoId(1);
 newTodo.setTask("hello to string id");
 todos.push(newTodo);

 todos.map((task:Todo) => console.log(""+task))
 

// // let todoManager = new TodoManager();


 
// newTodo.setTodoId(1);
// newTodo.setTask("hello to int id");
// todoManager.add(newTodo);

// let todos = todoManager.get();
// todos.map((todo:Todo) => console.log(""+todo))

