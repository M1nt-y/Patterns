class ConcreteSubject {
    state;
    observers = [];
    manageSubscription(observer) {
        const isExist = this.observers.includes(observer);
        const observerIndex = this.observers.indexOf(observer);
        if (isExist) {
            this.observers.splice(observerIndex, 1);
            return console.log('Subject: Detached an observer.');
        }
        console.log('Subject: Attached an observer.');
        this.observers.push(observer);
    }
    notify() {
        console.log('Subject: Notifying observers...');
        for (const observer of this.observers) {
            observer.update(this);
        }
    }
    someBusinessLogic() {
        console.log('\nSubject: I\'m doing something important.');
        this.state = Math.floor(Math.random() * (10 + 1));
        console.log(`Subject: My state has just changed to: ${this.state}`);
        this.notify();
    }
}
class ConcreteObserverA {
    update(subject) {
        if (subject instanceof ConcreteSubject && subject.state < 3) {
            console.log(`ConcreteObserverA: Reacted to the event: change of the state to ${subject.state}`);
        }
    }
}
class ConcreteObserverB {
    update(subject) {
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
