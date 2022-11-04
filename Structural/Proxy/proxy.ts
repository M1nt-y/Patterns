interface ISomeAPI {
    request(): void;
}

class RealSubject implements ISomeAPI {
    public ip = '143.653.8.356';
    public request(): void {
        console.log(`Good argument. Unfortunately, ${this.ip}`);
    }
}

class Proxy implements ISomeAPI {
    private realSubject: RealSubject;
    private ip = '111.111.1.111';
    constructor(realSubject: RealSubject) {
        this.realSubject = realSubject;
    }
    private useProxyConnection(): boolean {
        console.log('Proxy: Using my IP. Dont worry bro...');
        return true;
    }
    public request(): void {
        if (this.useProxyConnection()) {
            this.realSubject.ip = this.ip;
            this.realSubject.request();
        }
    }
}

function callAPI(subject: ISomeAPI) {
    subject.request();
}

console.log('Client: Executing the client code with a real subject:');
const realSubject = new RealSubject();
callAPI(realSubject);

console.log('');

console.log('Client: Executing the same client code with a proxy:');
const proxy = new Proxy(realSubject);
callAPI(proxy);