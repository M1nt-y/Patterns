var Originator = /** @class */ (function () {
    function Originator(hash) {
        this.hash = hash;
        console.log("Originator: My original hash is: ".concat(hash));
    }
    Originator.prototype.generateHash = function () {
        console.log('Originator: Generating new hash...');
        this.hash = this.generateRandomString(30);
        console.log("Originator: hash has changed to: ".concat(this.hash));
    };
    Originator.prototype.generateRandomString = function (length) {
        if (length === void 0) { length = 10; }
        var charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        return Array
            .apply(null, { length: length })
            .map(function () { return charSet.charAt(Math.floor(Math.random() * charSet.length)); })
            .join('');
    };
    Originator.prototype.save = function () {
        return new ConcreteMemento(this.hash);
    };
    Originator.prototype.restore = function (memento) {
        this.hash = memento.getHash();
        console.log("Originator: hash has changed to: ".concat(this.hash));
    };
    return Originator;
}());
var ConcreteMemento = /** @class */ (function () {
    function ConcreteMemento(state) {
        this.hash = state;
        this.date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    }
    ConcreteMemento.prototype.getHash = function () {
        return this.hash;
    };
    ConcreteMemento.prototype.getName = function () {
        return "".concat(this.date, "_").concat(this.hash);
    };
    ConcreteMemento.prototype.getDate = function () {
        return this.date;
    };
    return ConcreteMemento;
}());
var Caretaker = /** @class */ (function () {
    function Caretaker(originator) {
        this.mementos = [];
        this.originator = originator;
    }
    Caretaker.prototype.backup = function () {
        console.log('\nCaretaker: Saving Originator\'s state...');
        this.mementos.push(this.originator.save());
    };
    Caretaker.prototype.undo = function () {
        if (!this.mementos.length) {
            return;
        }
        var memento = this.mementos.pop();
        console.log("Caretaker: Restoring state to: ".concat(memento.getName()));
        this.originator.restore(memento);
    };
    Caretaker.prototype.showHistory = function () {
        console.log('Caretaker: Here\'s the list of mementos:');
        for (var _i = 0, _a = this.mementos; _i < _a.length; _i++) {
            var memento = _a[_i];
            console.log(memento.getName());
        }
    };
    return Caretaker;
}());
var originator = new Originator('First hash');
var caretaker = new Caretaker(originator);
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
