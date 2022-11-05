interface Iterator<T> {
    current(): T;
    next(): T;
    hasNext(): boolean;
    key(): number;
}

interface Aggregator {
    getIterator(): Iterator<string>;
}

class SomeOrderIterator implements Iterator<string> {
    private collection: WordsCollection;
    private index: number = 0;
    constructor(collection: WordsCollection) {
        this.collection = collection;
    }
    public current(): string {
        return this.collection.getItems()[this.index];
    }
    public key(): number {
        return this.index;
    }
    public next(): string {
        const item = this.collection.getItems()[this.index];
        this.index += 1;
        return item;
    }
    public hasNext(): boolean {
        return this.index < this.collection.getCount();
    }
}

class WordsCollection implements Aggregator {
    private items: string[] = [];
    public getItems(): string[] {
        return this.items;
    }
    public getCount(): number {
        return this.items.length;
    }
    public addItem(item: string): void {
        this.items.push(item);
    }
    public getIterator(): Iterator<string> {
        return new SomeOrderIterator(this);
    }
}


const collection = new WordsCollection();
collection.addItem('First');
collection.addItem('Second');
collection.addItem('Third');
collection.addItem('Fourth');
collection.addItem('Fifth');

const iterator = collection.getIterator();

console.log('Straight traversal:');
while (iterator.hasNext()) {
    console.log(iterator.next());
}