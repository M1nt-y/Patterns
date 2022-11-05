var SimpleCommand = /** @class */ (function () {
    function SimpleCommand(payload) {
        this.payload = payload;
    }
    SimpleCommand.prototype.execute = function () {
        console.log("SimpleCommand: See, I can do simple things like printing (".concat(this.payload, ")"));
    };
    return SimpleCommand;
}());
var ChangePosition = /** @class */ (function () {
    function ChangePosition(receiver, x, y) {
        this.receiver = receiver;
        this.x = x;
        this.y = y;
    }
    ChangePosition.prototype.execute = function () {
        console.log('ChangePosition: Complex stuff should be done by a receiver object.');
        this.receiver.moveHorizontally(this.x);
        this.receiver.moveVertically(this.y);
    };
    return ChangePosition;
}());
var Receiver = /** @class */ (function () {
    function Receiver() {
    }
    Receiver.prototype.moveHorizontally = function (x) {
        console.log("Receiver: Moving to X: ".concat(x, " pos."));
    };
    Receiver.prototype.moveVertically = function (y) {
        console.log("Receiver: Moving to Y: ".concat(y, " pos."));
    };
    return Receiver;
}());
var Invoker = /** @class */ (function () {
    function Invoker() {
    }
    Invoker.prototype.setOnStart = function (command) {
        this.onStart = command;
    };
    Invoker.prototype.setOnFinish = function (command) {
        this.onFinish = command;
    };
    Invoker.prototype.doSomethingImportant = function () {
        console.log('Invoker: Does anybody want something done before I begin?');
        if (this.isCommand(this.onStart)) {
            this.onStart.execute();
        }
        console.log('Invoker: ...doing something really important...');
        console.log('Invoker: Does anybody want something done after I finish?');
        if (this.isCommand(this.onFinish)) {
            this.onFinish.execute();
        }
    };
    Invoker.prototype.isCommand = function (object) {
        return object.execute !== undefined;
    };
    return Invoker;
}());
var invoker = new Invoker();
invoker.setOnStart(new SimpleCommand('Say Hi!'));
var receiver = new Receiver();
invoker.setOnFinish(new ChangePosition(receiver, '34', '129'));
invoker.doSomethingImportant();
