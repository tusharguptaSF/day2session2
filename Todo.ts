export interface Todo{
    // union type
    todoId:number|string;
    task:string;
    getTodoId : () => number|string;
    getTask : () => string;
    setTodoId : (todoId:number|string) => void;
    setTask : (task:string) => void;
}