enum ElementsType {
    Equipment,
    Enemy,
    Character
}

interface IGameElements {
    name: string;
    location?: string;
    movement?():void;
    action(): void;
}

class BaseGameElements implements IGameElements {
    constructor(public name:string, public location?:string) {
        // console.log(`${this.name} was created ...`);
    }
    movement(): void { }
    action(): void { }
}

class Equipment extends BaseGameElements {
    constructor(public name:string) {
        super(name);
        // console.log(`Equipment.${this.name} was created ...`);
    }
    action(): void {
        console.log(`${this.name} was equipped`);
    }
}
class Enemy extends BaseGameElements {
    constructor(public name:string, public location:string) {
        super(name, location);
        // console.log(`Enemy.${this.name} was created ...`);
    }
    movement(): void {
        console.log(`${this.name} is attacking you`);
    }
    action(): void {
        console.log(`${this.name} was defeated`);
    }
}
class Character extends BaseGameElements {
    constructor(public name:string, public location:string) {
        super(name, location);
        // console.log(`Character.${this.name} was created ...`);
    }
    movement(): void {
        console.log(`${this.name} is dealing fatal blow`);
    }
    action(): void {
        console.log(`${this.name} was attacked`);
    }
}

class Factory {
    createGameElement(name:string, elementType: ElementsType, location?: string) {
        switch (elementType) {
            case ElementsType.Equipment:
                return new Equipment(name);
            case ElementsType.Enemy:
                return new Enemy(name, location);
            case ElementsType.Character:
                return new Character(name, location);
            default:
                throw("Unsupported GameElement type");
        }
    }
}

const factory = new Factory();

const yourCharacter = factory.createGameElement("Your Name", ElementsType.Character, "Tutorial");
const someNPC = factory.createGameElement('NPC',ElementsType.Character,"Tutorial");
const oldIronSword = factory.createGameElement("Old Iron Sword", ElementsType.Equipment);
const newIronSword = factory.createGameElement("Iron Sword", ElementsType.Equipment);
const scarecrow = factory.createGameElement("Scarecrow", ElementsType.Enemy, "Tutorial");
const greenSlime = factory.createGameElement("Green Slime", ElementsType.Enemy, "Forest");
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function main() {
    console.log(`${someNPC.name}: Welcome to the tutorial, try to defeat ${scarecrow.name} with this ${oldIronSword.name}.`); await sleep(500);
    oldIronSword.action(); await sleep(500);
    yourCharacter.movement(); await sleep(500);
    scarecrow.action(); await sleep(500);
    console.log(`${someNPC.name}: Good work, here's your reward, take this: ${newIronSword.name}.`); await sleep(500);
    console.log(`${someNPC.name}: Go to the ${greenSlime.location} and defeat ${greenSlime.name}`); await sleep(500);
    console.log(`Moving to the ${greenSlime.location} ...`); await sleep(500);
    console.log(`${greenSlime.name} appeared`); await sleep(500);
    greenSlime.movement(); await sleep(500);
    yourCharacter.action(); await sleep(500);
    yourCharacter.movement(); await sleep(500);
    greenSlime.action(); await sleep(500);
    console.log("Victory!");
}
main();