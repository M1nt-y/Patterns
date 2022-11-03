class Prototype {
    constructor(model, color, price) {
        this.model = model;
        this.color = color;
        this.price = price;
    }
    clone() {
        const clone = Object.assign({}, this);
        return clone;
    }
}
const prototype = new Prototype('MK-4', 'chrome', 50000);
const prototype1 = prototype.clone();
const prototype2 = prototype.clone();
prototype2.color = 'aqua';
console.log(prototype1);
console.log(prototype2);
