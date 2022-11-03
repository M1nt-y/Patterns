var ElementsType;
(function (ElementsType) {
    ElementsType[ElementsType["Equipment"] = 0] = "Equipment";
    ElementsType[ElementsType["Enemy"] = 1] = "Enemy";
    ElementsType[ElementsType["Character"] = 2] = "Character";
})(ElementsType || (ElementsType = {}));
var EquipmentType;
(function (EquipmentType) {
    EquipmentType[EquipmentType["Armor"] = 0] = "Armor";
    EquipmentType[EquipmentType["Weapon"] = 1] = "Weapon";
    EquipmentType[EquipmentType["Consumable"] = 2] = "Consumable";
})(EquipmentType || (EquipmentType = {}));
var EnemyType;
(function (EnemyType) {
    EnemyType[EnemyType["Human"] = 0] = "Human";
    EnemyType[EnemyType["Animal"] = 1] = "Animal";
    EnemyType[EnemyType["Undead"] = 2] = "Undead";
})(EnemyType || (EnemyType = {}));
var CharacterType;
(function (CharacterType) {
    CharacterType[CharacterType["Playable"] = 0] = "Playable";
    CharacterType[CharacterType["NPC"] = 1] = "NPC";
})(CharacterType || (CharacterType = {}));
class BaseGameElements {
    constructor(name) {
        this.name = name;
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
class Armor extends Equipment {
    constructor(name) {
        super(name);
        this.name = name;
        // console.log(`Equipment.${this.name} was created ...`);
    }
    action() {
        console.log(`${this.name} was equipped`);
    }
}
class Weapon extends Equipment {
    constructor(name) {
        super(name);
        this.name = name;
        // console.log(`Equipment.${this.name} was created ...`);
    }
    action() {
        console.log(`${this.name} was equipped`);
    }
}
class Consumable extends Equipment {
    constructor(name) {
        super(name);
        this.name = name;
        // console.log(`Equipment.${this.name} was created ...`);
    }
    action() {
        console.log(`${this.name} was used`);
    }
}
class Enemy extends BaseGameElements {
    constructor(name) {
        super(name);
        this.name = name;
        // console.log(`Enemy.${this.name} was created ...`);
    }
    movement() {
        console.log(`${this.name} is attacking you`);
    }
    action() {
        console.log(`${this.name} was defeated`);
    }
}
class Human extends Enemy {
    constructor(name) {
        super(name);
        this.name = name;
        // console.log(`Enemy.${this.name} was created ...`);
    }
    movement() {
        console.log(`${this.name} is attacking you`);
    }
    action() {
        console.log(`${this.name} was defeated`);
    }
}
class Animal extends Enemy {
    constructor(name) {
        super(name);
        this.name = name;
        // console.log(`Enemy.${this.name} was created ...`);
    }
    movement() {
        console.log(`${this.name} is attacking you`);
    }
    action() {
        console.log(`${this.name} was defeated`);
    }
}
class Undead extends Enemy {
    constructor(name) {
        super(name);
        this.name = name;
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
    constructor(name) {
        super(name);
        this.name = name;
        // console.log(`Character.${this.name} was created ...`);
    }
    movement() {
        console.log(`${this.name} is dealing fatal blow`);
    }
    action() {
        console.log(`${this.name} was attacked`);
    }
}
class Playable extends Character {
    constructor(name) {
        super(name);
        this.name = name;
        // console.log(`Character.${this.name} was created ...`);
    }
    movement() {
        console.log(`${this.name} is dealing fatal blow`);
    }
    action() {
        console.log(`${this.name} was attacked`);
    }
}
class NPC extends Character {
    constructor(name) {
        super(name);
        this.name = name;
        // console.log(`Character.${this.name} was created ...`);
    }
    movement() {
        console.log(`${this.name} is slowly approaching you`);
    }
    action() {
        console.log(`${this.name} greets you.`);
    }
}
class Factory {
    constructor() { }
    createGameElement(name, elementType, location) { }
}
class EquipmentFactory extends Factory {
    constructor() {
        super();
    }
    createGameElement(name, elementType) {
        switch (elementType) {
            case EquipmentType.Armor:
                return new Armor(name);
            case EquipmentType.Weapon:
                return new Weapon(name);
            case EquipmentType.Consumable:
                return new Consumable(name);
            default:
                throw ("Unsupported GameElement type");
        }
    }
}
class EnemyFactory extends Factory {
    constructor() {
        super();
    }
    createGameElement(name, elementType) {
        switch (elementType) {
            case EnemyType.Human:
                return new Human(name);
            case EnemyType.Animal:
                return new Animal(name);
            case EnemyType.Undead:
                return new Undead(name);
            default:
                throw ("Unsupported GameElement type");
        }
    }
}
class CharacterFactory extends Factory {
    constructor() {
        super();
    }
    createGameElement(name, elementType) {
        switch (elementType) {
            case CharacterType.Playable:
                return new Playable(name);
            case CharacterType.NPC:
                return new NPC(name);
            default:
                throw ("Unsupported GameElement type");
        }
    }
}
class ArmorFactory extends EquipmentFactory {
    constructor() {
        super();
    }
    createGameElement(name) {
        return new Armor(name);
    }
}
class WeaponFactory extends EquipmentFactory {
    constructor() {
        super();
    }
    createGameElement(name) {
        return new Weapon(name);
    }
}
class ConsumableFactory extends EquipmentFactory {
    constructor() {
        super();
    }
    createGameElement(name) {
        return new Consumable(name);
    }
}
class HumanFactory extends EnemyFactory {
    constructor() {
        super();
    }
    createGameElement(name) {
        return new Human(name);
    }
}
class AnimalFactory extends EnemyFactory {
    constructor() {
        super();
    }
    createGameElement(name) {
        return new Animal(name);
    }
}
class UndeadFactory extends EnemyFactory {
    constructor() {
        super();
    }
    createGameElement(name) {
        return new Undead(name);
    }
}
class PlayableFactory extends CharacterFactory {
    constructor() {
        super();
    }
    createGameElement(name) {
        return new Playable(name);
    }
}
class NPCFactory extends CharacterFactory {
    constructor() {
        super();
    }
    createGameElement(name) {
        return new NPC(name);
    }
}
const armorFactory = new ArmorFactory();
const weaponFactory = new WeaponFactory();
const consumableFactory = new ConsumableFactory();
const humanFactory = new HumanFactory();
const animalFactory = new AnimalFactory();
const undeadFactory = new UndeadFactory();
const playableFactory = new PlayableFactory();
const npcFactory = new NPCFactory();
const leatherArmor = armorFactory.createGameElement('Leather Armor');
const ironSword = weaponFactory.createGameElement('Iron Sword');
const healingPotion = consumableFactory.createGameElement('Healing Potion');
const bandit = humanFactory.createGameElement('Aggressive Bandit');
const bear = animalFactory.createGameElement('Bear');
const skeleton = undeadFactory.createGameElement('Skeleton Warrior');
const yourCharacter = playableFactory.createGameElement('Berserk');
const someNPC = npcFactory.createGameElement('Butcher');
leatherArmor.action();
ironSword.action();
bandit.movement();
yourCharacter.action();
healingPotion.action();
yourCharacter.movement();
someNPC.movement();
someNPC.action();
