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
var GamingDevice = /** @class */ (function () {
    function GamingDevice() {
    }
    GamingDevice.prototype.templateMethod = function () {
        this.turnOn();
        this.launchGame();
        this.closeGame();
        this.hook1();
        this.uniqueOperation();
        this.turnOff();
    };
    GamingDevice.prototype.turnOn = function () {
        console.log('GamingDevice: Turning on...');
    };
    GamingDevice.prototype.closeGame = function () {
        console.log('GamingDevice: Closing game...');
    };
    GamingDevice.prototype.turnOff = function () {
        console.log('GamingDevice: Turning off...');
    };
    GamingDevice.prototype.hook1 = function () { };
    return GamingDevice;
}());
var PersonalComputer = /** @class */ (function (_super) {
    __extends(PersonalComputer, _super);
    function PersonalComputer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PersonalComputer.prototype.launchGame = function () {
        console.log('PersonalComputer: Launching PC game...');
    };
    PersonalComputer.prototype.uniqueOperation = function () {
        console.log('PersonalComputer: Unique for PC operation');
    };
    return PersonalComputer;
}(GamingDevice));
var PlayStation = /** @class */ (function (_super) {
    __extends(PlayStation, _super);
    function PlayStation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlayStation.prototype.launchGame = function () {
        console.log('PlayStation: Launching PS5 game');
    };
    PlayStation.prototype.uniqueOperation = function () {
        console.log('PlayStation: Unique for PS5 operation');
    };
    return PlayStation;
}(GamingDevice));
function clientCode(abstractClass) {
    abstractClass.templateMethod();
}
console.log('Same client code can work with different subclasses:');
clientCode(new PersonalComputer());
console.log('');
console.log('Same client code can work with different subclasses:');
clientCode(new PlayStation());
