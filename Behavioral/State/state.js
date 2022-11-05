class Order {
    constructor() {
        this.cancelledOrderState = new CancelledOrderState(this);
        this.paymentPendingState = new PaymentPendingState(this);
        this.orderShippedState = new OrderShippedState(this);
        this.orderBeingPreparedState = new OrderBeingPreparedState(this);
        this.setState(this.paymentPendingState);
    }
    setState(state) {
        this.currentState = state;
    }
    getState() {
        return this.currentState;
    }
}
class PaymentPendingState {
    constructor(order) {
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
    shipOrder() {
    }
}
class CancelledOrderState {
    constructor(order) {
        this.order = order;
    }
    cancelOrder() {
    }
    shipOrder() {
    }
    verifyPayment() {
    }
}
class OrderBeingPreparedState {
    constructor(order) {
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
    verifyPayment() {
    }
}
class OrderShippedState {
    constructor(order) {
        this.order = order;
    }
    cancelOrder() {
    }
    shipOrder() {
    }
    verifyPayment() {
    }
}
let order = new Order();
console.log(`Order state: ${order.getState().constructor.name}`);
order.getState().cancelOrder();
console.log(`Order state: ${order.getState().constructor.name}`);
let order1 = new Order();
console.log(`New order state: ${order1.getState().constructor.name}`);
order1.getState().verifyPayment();
order1.getState().verifyPayment();
order1.getState().shipOrder();
console.log(`Order state: ${order1.getState().constructor.name}`);
