"use strict";
exports.__esModule = true;
exports.TodoManager = void 0;
var TodoManager = /** @class */ (function () {
    function TodoManager() {
        var _this = this;
        this.todos = [];
        this.add = function (task) { return _this.todos.push(task); };
        this.get = function () { return _this.todos; };
    }
    return TodoManager;
}());
exports.TodoManager = TodoManager;
