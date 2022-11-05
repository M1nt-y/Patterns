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
var AbstractHandler = /** @class */ (function () {
    function AbstractHandler() {
    }
    AbstractHandler.prototype.setNext = function (handler) {
        this.nextHandler = handler;
        return handler;
    };
    AbstractHandler.prototype.handle = function (request) {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        return null;
    };
    return AbstractHandler;
}());
var SeniorDev = /** @class */ (function (_super) {
    __extends(SeniorDev, _super);
    function SeniorDev() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SeniorDev.prototype.handle = function (request) {
        if (request === 'Above average') {
            return "Senior: I'll take the ".concat(request, " difficulty task.");
        }
        return _super.prototype.handle.call(this, request);
    };
    return SeniorDev;
}(AbstractHandler));
var MiddleDev = /** @class */ (function (_super) {
    __extends(MiddleDev, _super);
    function MiddleDev() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MiddleDev.prototype.handle = function (request) {
        if (request === 'Below average') {
            return "Mid: I'll take the ".concat(request, " difficulty task.");
        }
        return _super.prototype.handle.call(this, request);
    };
    return MiddleDev;
}(AbstractHandler));
var JuniorDev = /** @class */ (function (_super) {
    __extends(JuniorDev, _super);
    function JuniorDev() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JuniorDev.prototype.handle = function (request) {
        if (request === 'Hard') {
            return "Junior: Damn.. only the ".concat(request, " task left, I'll try to do it somehow....");
        }
        return _super.prototype.handle.call(this, request);
    };
    return JuniorDev;
}(AbstractHandler));
function clientCode(handler) {
    var tasks = ['Above average', 'Below average', 'Hard'];
    for (var _i = 0, tasks_1 = tasks; _i < tasks_1.length; _i++) {
        var task = tasks_1[_i];
        console.log("Client: Who wants a ".concat(task, " task?"));
        var result = handler.handle(task);
        if (result) {
            console.log("  ".concat(result));
        }
        else {
            console.log("  ".concat(task, " was left untouched."));
        }
    }
}
var senior = new SeniorDev();
var middle = new MiddleDev();
var junior = new JuniorDev();
senior.setNext(middle).setNext(junior);
console.log('Chain: Senior > Middle > Junior\n');
clientCode(senior);
// console.log('');
// console.log('Subchain: Middle > Junior\n');
// clientCode(middle);
