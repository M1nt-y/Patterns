var Manager = /** @class */ (function () {
    function Manager() {
    }
    Manager.prototype.accept = function (visitor) {
        visitor.visitManager(this);
    };
    Manager.prototype.listenToRequest = function () {
        return 'Manager posted request on task board:';
    };
    return Manager;
}());
var Mercenary = /** @class */ (function () {
    function Mercenary() {
    }
    Mercenary.prototype.accept = function (visitor) {
        visitor.visitMercenary(this);
    };
    Mercenary.prototype.requestEscort = function () {
        return 'Mercenary was hired for escorting';
    };
    return Mercenary;
}());
var Merchant = /** @class */ (function () {
    function Merchant() {
    }
    Merchant.prototype.visitManager = function (manager) {
        console.log("".concat(manager.listenToRequest(), " escort Merchant for 10 gold"));
    };
    Merchant.prototype.visitMercenary = function (mercenary) {
        console.log("".concat(mercenary.requestEscort(), " Merchant."));
    };
    return Merchant;
}());
var Farmer = /** @class */ (function () {
    function Farmer() {
    }
    Farmer.prototype.visitManager = function (manager) {
        console.log("".concat(manager.listenToRequest(), " kill mobs around Farm for 5 gold."));
    };
    Farmer.prototype.visitMercenary = function (mercenary) { };
    return Farmer;
}());
function clientCode(components, visitor) {
    for (var _i = 0, components_1 = components; _i < components_1.length; _i++) {
        var component = components_1[_i];
        component.accept(visitor);
    }
}
var components = [
    new Manager(),
    new Mercenary(),
];
console.log('The client code works with all visitors via the base Visitor interface:');
var visitor1 = new Merchant();
clientCode(components, visitor1);
console.log('');
console.log('It allows the same client code to work with different types of visitors:');
var visitor2 = new Farmer();
clientCode(components, visitor2);
