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
var Account = /** @class */ (function () {
    function Account() {
    }
    Account.prototype.getDescription = function () {
        return this.description;
    };
    return Account;
}());
var Basic = /** @class */ (function (_super) {
    __extends(Basic, _super);
    function Basic() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.plan = 'Basic';
        return _this;
    }
    Basic.prototype.getDescription = function () {
        return "".concat(this.plan, " Account");
    };
    return Basic;
}(Account));
var Features = /** @class */ (function (_super) {
    __extends(Features, _super);
    function Features() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Features;
}(Account));
var Vip = /** @class */ (function (_super) {
    __extends(Vip, _super);
    function Vip(account) {
        var _this = _super.call(this) || this;
        _this.plan = 'Vip';
        _this.appliedFeature = account;
        _this.appliedFeature.plan = _this.plan;
        return _this;
    }
    Vip.prototype.expBonus = function () { return 15; };
    Vip.prototype.price = function () { return 100; };
    Vip.prototype.getDescription = function () {
        return this.appliedFeature.getDescription() + ", price: ".concat(this.price().toFixed(), " UAH, applied feature: EXP bonus +").concat(this.expBonus().toFixed(), "%");
    };
    return Vip;
}(Features));
var Premium = /** @class */ (function (_super) {
    __extends(Premium, _super);
    function Premium(account) {
        var _this = _super.call(this) || this;
        _this.plan = 'Premium';
        _this.appliedFeature = account;
        _this.appliedFeature.plan = _this.plan;
        return _this;
    }
    Premium.prototype.expBonus = function () { return 25; };
    Premium.prototype.price = function () { return 250; };
    Premium.prototype.getDescription = function () {
        return this.appliedFeature.getDescription() + ", price: ".concat(this.price().toFixed(), " UAH, applied feature: EXP bonus +").concat(this.expBonus().toFixed(), "%");
    };
    return Premium;
}(Features));
var myAccount = new Basic();
console.log(myAccount.getDescription());
var mySecondAccount = new Vip(myAccount);
console.log(mySecondAccount.getDescription());
var myPremiumAccount = new Premium(myAccount);
console.log(myPremiumAccount.getDescription());
