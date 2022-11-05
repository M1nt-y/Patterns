interface IStrategy {
    operation(): void;
}

class PurchaseStrategy implements IStrategy {
    operation(): void {
        console.log('Processing purchase operation...');
    }
}
class RefundStrategy implements IStrategy {
    operation(): void {
        console.log('Processing refund operation...');
    }
}

class Client {
    private strategy: IStrategy;
    public chooseStrategy(strategy: IStrategy) {
        this.strategy = strategy;
    }
    public useStrategy() {
        this.strategy.operation();
    }
}


const client1 = new Client();
const client2 = new Client();
console.log('Client1:');
client1.chooseStrategy(new PurchaseStrategy());
client1.useStrategy();
console.log('Client2:');
client2.chooseStrategy(new RefundStrategy());
client2.useStrategy();