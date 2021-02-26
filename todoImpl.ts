import {Todo} from './Todo';
export class TodoImpl implements Todo{
    todoId:number|string = 0;
    task:string = "";
    getTodoId = () => {
        return this.todoId;
    }
    setTodoId = (todoId:number|string) => {
        this.todoId = todoId;
    }
    getTask = () => {
        return this.task;
    }
    setTask = (task:string) => {
        this.task = task;
    }
    toString = () =>`${this.todoId}: ${this.task}`
}