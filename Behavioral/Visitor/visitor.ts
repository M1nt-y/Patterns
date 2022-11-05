interface MercenaryGuild {
    accept(visitor: Visitor): void;
}

class Manager implements MercenaryGuild {
    public accept(visitor: Visitor): void {
        visitor.visitManager(this);
    }
    public listenToRequest(): string {
        return 'Manager posted request on task board:';
    }
}
class Mercenary implements MercenaryGuild {
    public accept(visitor: Visitor): void {
        visitor.visitMercenary(this);
    }
    public requestEscort(): string {
        return 'Mercenary was hired for escorting';
    }
}

interface Visitor {
    visitManager(manager: Manager): void;
    visitMercenary(mercenary: Mercenary): void;
}

class Merchant implements Visitor {
    public visitManager(manager: Manager): void {
        console.log(`${manager.listenToRequest()} escort Merchant for 10 gold`);
    }
    public visitMercenary(mercenary: Mercenary): void {
        console.log(`${mercenary.requestEscort()} Merchant.`);
    }
}

class Farmer implements Visitor {
    public visitManager(manager: Manager): void {
        console.log(`${manager.listenToRequest()} kill mobs around Farm for 5 gold.`);
    }
    public visitMercenary(mercenary: Mercenary): void { }
}


function clientCode(components: MercenaryGuild[], visitor: Visitor) {
    for (const component of components) {
        component.accept(visitor);
    }
}

const components = [
    new Manager(),
    new Mercenary(),
];

console.log('The client code works with all visitors via the base Visitor interface:');
const visitor1 = new Merchant();
clientCode(components, visitor1);
console.log('');

console.log('It allows the same client code to work with different types of visitors:');
const visitor2 = new Farmer();
clientCode(components, visitor2);