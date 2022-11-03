var Singleton = /** @class */ (function () {
    function Singleton(d) {
        this.data = d;
    }
    Singleton.getInstance = function (d) {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton(d);
        }
        return Singleton.instance;
    };
    return Singleton;
}());
var singleton1 = Singleton.getInstance('Singleton');
console.log(singleton1.data);
var singleton2 = Singleton.getInstance('Some another string');
console.log(singleton2.data);
console.log(singleton1 === singleton2);
