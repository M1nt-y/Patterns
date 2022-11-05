interface IState {
    order: Order;
    cancelOrder(): void;
    verifyPayment(): void;
    shipOrder(): void;
}

class Order {
    public cancelledOrderState: IState;
    public paymentPendingState: IState;
    public orderShippedState: IState;
    public orderBeingPreparedState: IState;
    public currentState: IState;
    public constructor() {
        this.cancelledOrderState = new CancelledOrderState(this);
        this.paymentPendingState = new PaymentPendingState(this);
        this.orderShippedState = new OrderShippedState(this);
        this.orderBeingPreparedState = new OrderBeingPreparedState(this);
        this.setState(this.paymentPendingState);
    }
    public setState(state: IState) {
        this.currentState = state;
    }
    public getState(): IState {
        return this.currentState;
    }
}

class PaymentPendingState implements IState {
    order: Order;
    constructor(order: Order) {
        this.order = order;
    }
    cancelOrder() {
        console.log('Cancelling your payment order...');
        this.order.setState(this.order.cancelledOrderState);
    }
    verifyPayment() {
        console.log('Payment verified! Shipping soon.');
        this.order.setState(this.order.orderBeingPreparedState);
    }
    shipOrder(): void {
    }
}
class CancelledOrderState implements IState {
    order: Order;
    constructor(order: Order) {
        this.order = order;
    }
    cancelOrder(): void {
    }
    shipOrder(): void {
    }
    verifyPayment(): void {
    }
}
class OrderBeingPreparedState implements IState {
    order: Order;
    constructor(order: Order) {
        this.order = order;
    }
    cancelOrder() {
        console.log('Cancelling your order...');
        this.order.setState(this.order.cancelledOrderState);
    }
    shipOrder() {
        console.log('Shipping your order...');
        this.order.setState(this.order.orderShippedState);
    }
    verifyPayment(): void {
    }
}
class OrderShippedState implements IState {
    order: Order;
    constructor(order: Order) {
        this.order = order;
    }
    cancelOrder(): void {
    }
    shipOrder(): void {
    }
    verifyPayment(): void {
    }
}

let order = new Order();
console.log(`Order state: ${<any> order.getState().constructor.name}`);
order.getState().cancelOrder();
console.log(`Order state: ${<any> order.getState().constructor.name}`);
let order1 = new Order();
console.log(`New order state: ${<any> order1.getState().constructor.name}`);
order1.getState().verifyPayment();
order1.getState().verifyPayment();
order1.getState().shipOrder();
console.log(`Order state: ${<any> order1.getState().constructor.name}`);