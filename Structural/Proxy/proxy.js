var RealSubject = /** @class */ (function () {
    function RealSubject() {
        this.ip = '143.653.8.356';
    }
    RealSubject.prototype.request = function () {
        console.log("Good argument. Unfortunately, ".concat(this.ip));
    };
    return RealSubject;
}());
var Proxy = /** @class */ (function () {
    function Proxy(realSubject) {
        this.ip = '111.111.1.111';
        this.realSubject = realSubject;
    }
    Proxy.prototype.request = function () {
        if (this.useProxyConnection()) {
            this.realSubject.ip = this.ip;
            this.realSubject.request();
        }
    };
    Proxy.prototype.useProxyConnection = function () {
        console.log('Proxy: Using my IP. Dont worry bro...');
        return true;
    };
    return Proxy;
}());
function callAPI(subject) {
    subject.request();
}
console.log('Client: Executing the client code with a real subject:');
var realSubject = new RealSubject();
callAPI(realSubject);
console.log('');
console.log('Client: Executing the same client code with a proxy:');
var proxy = new Proxy(realSubject);
callAPI(proxy);
