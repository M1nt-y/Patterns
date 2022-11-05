var PurchaseStrategy = /** @class */ (function () {
    function PurchaseStrategy() {
    }
    PurchaseStrategy.prototype.operation = function () {
        console.log('Processing purchase operation...');
    };
    return PurchaseStrategy;
}());
var RefundStrategy = /** @class */ (function () {
    function RefundStrategy() {
    }
    RefundStrategy.prototype.operation = function () {
        console.log('Processing refund operation...');
    };
    return RefundStrategy;
}());
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.chooseStrategy = function (strategy) {
        this.strategy = strategy;
    };
    Client.prototype.useStrategy = function () {
        this.strategy.operation();
    };
    return Client;
}());
var client1 = new Client();
var client2 = new Client();
console.log('Client1:');
client1.chooseStrategy(new PurchaseStrategy());
client1.useStrategy();
console.log('Client2:');
client2.chooseStrategy(new RefundStrategy());
client2.useStrategy();
