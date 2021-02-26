import {Todo} from  './Todo';
export class TodoManager {
  todos:Array<Todo> = [];
  add = (task:Todo) => this.todos.push(task);
  get = () => this.todos;
}





  