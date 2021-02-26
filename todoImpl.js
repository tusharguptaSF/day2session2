"use strict";
exports.__esModule = true;
exports.TodoImpl = void 0;
var TodoImpl = /** @class */ (function () {
    function TodoImpl() {
        var _this = this;
        this.todoId = 0;
        this.task = "";
        this.getTodoId = function () {
            return _this.todoId;
        };
        this.setTodoId = function (todoId) {
            _this.todoId = todoId;
        };
        this.getTask = function () {
            return _this.task;
        };
        this.setTask = function (task) {
            _this.task = task;
        };
        this.toString = function () { return _this.todoId + ": " + _this.task; };
    }
    return TodoImpl;
}());
exports.TodoImpl = TodoImpl;
