interface ISubject {
    manageSubscription(observer: Observer): void;
    notify(): void;
}
interface Observer {
    update(subject: ISubject): void;
}

class ConcreteSubject implements ISubject {
    private observers: Observer[] = [];
    public state: number;
    public manageSubscription(observer: Observer): void {
        const isExist = this.observers.includes(observer);
        const observerIndex = this.observers.indexOf(observer);
        if (isExist) {
            this.observers.splice(observerIndex, 1);
            return console.log('ISubject: Detached an observer.');
        }
        console.log('ISubject: Attached an observer.');
        this.observers.push(observer);
    }
    public notify(): void {
        console.log('ISubject: Notifying observers...');
        for (const observer of this.observers) {
            observer.update(this);
        }
    }
    public someBusinessLogic(): void {
        console.log('\nISubject: I\'m doing something important.');
        this.state = Math.floor(Math.random() * (10 + 1));
        console.log(`Subject: My state has just changed to: ${this.state}`);
        this.notify();
    }
}

class ConcreteObserverA implements Observer {
    public update(subject: ISubject): void {
        if (subject instanceof ConcreteSubject && subject.state < 3) {
            console.log(`ConcreteObserverA: Reacted to the event: change of the state to ${subject.state}`);
        }
    }
}
class ConcreteObserverB implements Observer {
    public update(subject: ISubject): void {
        if (subject instanceof ConcreteSubject && (subject.state === 0 || subject.state >= 2)) {
            console.log(`ConcreteObserverB: Reacted to the event: change of the state to ${subject.state}`);
        }
    }
}


const subject = new ConcreteSubject();
const observer1 = new ConcreteObserverA();
subject.manageSubscription(observer1);
const observer2 = new ConcreteObserverB();
subject.manageSubscription(observer2);
subject.someBusinessLogic();
subject.someBusinessLogic();
subject.manageSubscription(observer2);
subject.someBusinessLogic();