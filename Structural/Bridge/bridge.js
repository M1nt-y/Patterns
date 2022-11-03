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
var CCPayment = /** @class */ (function () {
    function CCPayment() {
    }
    CCPayment.prototype.processPayment = function (payment) {
        console.log('Processing CreditCard payment ...');
        console.log(payment);
        console.log('Payment precessed.');
    };
    return CCPayment;
}());
var PayPalPayment = /** @class */ (function () {
    function PayPalPayment() {
    }
    PayPalPayment.prototype.processPayment = function (payment) {
        console.log('Processing PayPal payment ...');
        console.log(payment);
        console.log('Payment precessed.');
    };
    return PayPalPayment;
}());
var Company = /** @class */ (function () {
    function Company(paymentProcessor) {
        this.paymentProcessor = paymentProcessor;
    }
    Company.prototype.processPayment = function (payment) {
        this.paymentProcessor.processPayment(payment);
    };
    return Company;
}());
var RiotCompany = /** @class */ (function (_super) {
    __extends(RiotCompany, _super);
    function RiotCompany() {
        return _super.call(this, new PayPalPayment()) || this;
    }
    return RiotCompany;
}(Company));
var ValveCompany = /** @class */ (function (_super) {
    __extends(ValveCompany, _super);
    function ValveCompany() {
        return _super.call(this, new CCPayment()) || this;
    }
    return ValveCompany;
}(Company));
var riotCompany = new RiotCompany();
riotCompany.processPayment('Purchasing Valorant skins');
var valveCompany = new ValveCompany();
valveCompany.processPayment('Purchasing CS:GO skins');
