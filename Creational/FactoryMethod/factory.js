var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var ElementsType;
(function (ElementsType) {
    ElementsType[ElementsType["Equipment"] = 0] = "Equipment";
    ElementsType[ElementsType["Enemy"] = 1] = "Enemy";
    ElementsType[ElementsType["Character"] = 2] = "Character";
})(ElementsType || (ElementsType = {}));
class BaseGameElements {
    constructor(name, location) {
        this.name = name;
        this.location = location;
        // console.log(`${this.name} was created ...`);
    }
    movement() { }
    action() { }
}
class Equipment extends BaseGameElements {
    constructor(name) {
        super(name);
        this.name = name;
        // console.log(`Equipment.${this.name} was created ...`);
    }
    action() {
        console.log(`${this.name} was equipped`);
    }
}
class Enemy extends BaseGameElements {
    constructor(name, location) {
        super(name, location);
        this.name = name;
        this.location = location;
        // console.log(`Enemy.${this.name} was created ...`);
    }
    movement() {
        console.log(`${this.name} is attacking you`);
    }
    action() {
        console.log(`${this.name} was defeated`);
    }
}
class Character extends BaseGameElements {
    constructor(name, location) {
        super(name, location);
        this.name = name;
        this.location = location;
        // console.log(`Character.${this.name} was created ...`);
    }
    movement() {
        console.log(`${this.name} is dealing fatal blow`);
    }
    action() {
        console.log(`${this.name} was attacked`);
    }
}
class Factory {
    createGameElement(name, elementType, location) {
        switch (elementType) {
            case ElementsType.Equipment:
                return new Equipment(name);
            case ElementsType.Enemy:
                return new Enemy(name, location);
            case ElementsType.Character:
                return new Character(name, location);
            default:
                throw ("Unsupported GameElement type");
        }
    }
}
const factory = new Factory();
const yourCharacter = factory.createGameElement("Your Name", ElementsType.Character, "Tutorial");
const someNPC = factory.createGameElement('NPC', ElementsType.Character, "Tutorial");
const oldIronSword = factory.createGameElement("Old Iron Sword", ElementsType.Equipment);
const newIronSword = factory.createGameElement("Iron Sword", ElementsType.Equipment);
const scarecrow = factory.createGameElement("Scarecrow", ElementsType.Enemy, "Tutorial");
const greenSlime = factory.createGameElement("Green Slime", ElementsType.Enemy, "Forest");
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(`${someNPC.name}: Welcome to the tutorial, try to defeat ${scarecrow.name} with this ${oldIronSword.name}.`);
        yield sleep(500);
        oldIronSword.action();
        yield sleep(500);
        yourCharacter.movement();
        yield sleep(500);
        scarecrow.action();
        yield sleep(500);
        console.log(`${someNPC.name}: Good work, here's your reward, take this: ${newIronSword.name}.`);
        yield sleep(500);
        console.log(`${someNPC.name}: Go to the ${greenSlime.location} and defeat ${greenSlime.name}`);
        yield sleep(500);
        console.log(`Moving to the ${greenSlime.location} ...`);
        yield sleep(500);
        console.log(`${greenSlime.name} appeared`);
        yield sleep(500);
        greenSlime.movement();
        yield sleep(500);
        yourCharacter.action();
        yield sleep(500);
        yourCharacter.movement();
        yield sleep(500);
        greenSlime.action();
        yield sleep(500);
        console.log("Victory!");
    });
}
main();
