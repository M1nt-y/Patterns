class Originator {
    private hash: string;
    constructor(hash: string) {
        this.hash = hash;
        console.log(`Originator: My original hash is: ${hash}`);
    }
    public generateHash(): void {
        console.log('Originator: Generating new hash...');
        this.hash = this.generateRandomString(30);
        console.log(`Originator: hash has changed to: ${this.hash}`);
    }
    private generateRandomString(length: number = 10): string {
        const charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        return Array
            .apply(null, { length })
            .map(() => charSet.charAt(Math.floor(Math.random() * charSet.length)))
            .join('');
    }

    public save(): Memento {
        return new ConcreteMemento(this.hash);
    }
    public restore(memento: Memento): void {
        this.hash = memento.getHash();
        console.log(`Originator: hash has changed to: ${this.hash}`);
    }
}

interface Memento {
    getHash(): string;
    getName(): string;
    getDate(): string;
}

class ConcreteMemento implements Memento {
    private readonly hash: string;
    private readonly date: string;
    constructor(state: string) {
        this.hash = state;
        this.date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    }

    public getHash(): string {
        return this.hash;
    }
    public getName(): string {
        return `${this.date}_${this.hash}`;
    }
    public getDate(): string {
        return this.date;
    }
}

class Caretaker {
    private mementos: Memento[] = [];
    private originator: Originator;
    constructor(originator: Originator) {
        this.originator = originator;
    }
    public backup(): void {
        console.log('\nCaretaker: Saving Originator\'s state...');
        this.mementos.push(this.originator.save());
    }
    public undo(): void {
        if (!this.mementos.length) {
            return;
        }
        const memento = this.mementos.pop();
        console.log(`Caretaker: Restoring state to: ${memento.getName()}`);
        this.originator.restore(memento);
    }
    public showHistory(): void {
        console.log('Caretaker: Here\'s the list of mementos:');
        for (const memento of this.mementos) {
            console.log(memento.getName());
        }
    }
}

const originator = new Originator('First hash');
const caretaker = new Caretaker(originator);

caretaker.backup();
originator.generateHash();

caretaker.backup();
originator.generateHash();

caretaker.backup();
originator.generateHash();

console.log('');
caretaker.showHistory();

console.log('\nClient: Now, let\'s rollback!\n');
caretaker.undo();

console.log('\nClient: Once more!\n');
caretaker.undo();