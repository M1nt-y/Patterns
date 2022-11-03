class Prototype {
    public model: string;
    public color: string;
    public price: number;

    constructor(model: string, color: string, price: number) {
        this.model = model;
        this.color = color;
        this.price = price;
    }

    public clone(): this {
        const clone = Object.assign({}, this);
        return clone;
    }
}

const prototype = new Prototype('MK-4', 'chrome', 50000);
const prototype1 = prototype.clone();
const prototype2 = prototype.clone();
prototype2.color = 'aqua'
console.log(prototype1);
console.log(prototype2);
