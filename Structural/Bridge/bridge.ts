interface IPaymentMethod {
    processPayment(payment: string): void;
}

class CreditCardPayment implements IPaymentMethod {
    processPayment(payment:string) {
        console.log('Processing CreditCard payment ...');
        console.log(payment);
        console.log('Payment precessed.');
    }
}

class PayPalPayment implements IPaymentMethod {
    processPayment(payment:string) {
        console.log('Processing PayPal payment ...');
        console.log(payment);
        console.log('Payment precessed.');
    }
}

class Company {
    private paymentProcessor: IPaymentMethod;
    constructor(paymentProcessor:IPaymentMethod) {
        this.paymentProcessor = paymentProcessor;
    }
    processPayment(payment:string) {
        this.paymentProcessor.processPayment(payment);
    }
}

class RiotCompany extends Company {
    constructor() {
        super(new PayPalPayment());
    }
}
class ValveCompany extends Company {
    constructor() {
        super(new CreditCardPayment());
    }
}

const riotCompany = new RiotCompany();
riotCompany.processPayment('Purchasing Valorant skins');
const valveCompany = new ValveCompany();
valveCompany.processPayment('Purchasing CS:GO skins');