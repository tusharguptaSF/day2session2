var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var check = /** @class */ (function () {
    function check() {
        this.greet = "Hello";
        this.getHello = function () {
            console.log("say Hello");
        };
    }
    return check;
}());
var childCheck = /** @class */ (function (_super) {
    __extends(childCheck, _super);
    function childCheck() {
        var _this = _super.call(this) || this;
        _this.greet = "hi";
        _this.getHello = function () {
            console.log("say Hello feom child");
        };
        console.log(_super.prototype.getHello.call(_this));
        return _this;
    }
    return childCheck;
}(check));
// Case 1
// let checkObj = new check()
// checkObj.getHello();
var checkObj = new childCheck();
checkObj.getHello();
