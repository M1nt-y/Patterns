var AlphabeticalOrderIterator = /** @class */ (function () {
    function AlphabeticalOrderIterator(collection) {
        this.index = 0;
        this.collection = collection;
    }
    AlphabeticalOrderIterator.prototype.current = function () {
        return this.collection.getItems()[this.index];
    };
    AlphabeticalOrderIterator.prototype.key = function () {
        return this.index;
    };
    AlphabeticalOrderIterator.prototype.next = function () {
        var item = this.collection.getItems()[this.index];
        this.index += 1;
        return item;
    };
    AlphabeticalOrderIterator.prototype.hasNext = function () {
        return this.index < this.collection.getCount();
    };
    return AlphabeticalOrderIterator;
}());
var WordsCollection = /** @class */ (function () {
    function WordsCollection() {
        this.items = [];
    }
    WordsCollection.prototype.getItems = function () {
        return this.items;
    };
    WordsCollection.prototype.getCount = function () {
        return this.items.length;
    };
    WordsCollection.prototype.addItem = function (item) {
        this.items.push(item);
    };
    WordsCollection.prototype.getIterator = function () {
        return new AlphabeticalOrderIterator(this);
    };
    return WordsCollection;
}());
var collection = new WordsCollection();
collection.addItem('First');
collection.addItem('Second');
collection.addItem('Third');
collection.addItem('Fourth');
collection.addItem('Fifth');
var iterator = collection.getIterator();
console.log('Straight traversal:');
while (iterator.hasNext()) {
    console.log(iterator.next());
}
