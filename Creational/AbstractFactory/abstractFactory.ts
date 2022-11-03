enum ElementsType {
    Equipment,
    Enemy,
    Character
}
enum EquipmentType {
    Armor,
    Weapon,
    Consumable
}
enum EnemyType {
    Human,
    Animal,
    Undead
}
enum CharacterType {
    Playable,
    NPC
}
interface IGameElements {
    name: string;
    movement?():void;
    action(): void;
}

class BaseGameElements implements IGameElements {
    constructor(public name:string) {
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

class Armor extends Equipment {
    constructor(public name:string) {
        super(name);
        // console.log(`Equipment.${this.name} was created ...`);
    }
    action(): void {
        console.log(`${this.name} was equipped`);
    }
}
class Weapon extends Equipment {
    constructor(public name:string) {
        super(name);
        // console.log(`Equipment.${this.name} was created ...`);
    }
    action(): void {
        console.log(`${this.name} was equipped`);
    }
}
class Consumable extends Equipment {
    constructor(public name:string) {
        super(name);
        // console.log(`Equipment.${this.name} was created ...`);
    }
    action(): void {
        console.log(`${this.name} was used`);
    }
}

class Enemy extends BaseGameElements {
    constructor(public name:string) {
        super(name);
        // console.log(`Enemy.${this.name} was created ...`);
    }
    movement(): void {
        console.log(`${this.name} is attacking you`);
    }
    action(): void {
        console.log(`${this.name} was defeated`);
    }
}

class Human extends Enemy {
    constructor(public name:string) {
        super(name);
        // console.log(`Enemy.${this.name} was created ...`);
    }
    movement(): void {
        console.log(`${this.name} is attacking you`);
    }
    action(): void {
        console.log(`${this.name} was defeated`);
    }
}
class Animal extends Enemy {
    constructor(public name:string) {
        super(name);
        // console.log(`Enemy.${this.name} was created ...`);
    }
    movement(): void {
        console.log(`${this.name} is attacking you`);
    }
    action(): void {
        console.log(`${this.name} was defeated`);
    }
}
class Undead extends Enemy {
    constructor(public name:string) {
        super(name);
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
    constructor(public name:string) {
        super(name);
        // console.log(`Character.${this.name} was created ...`);
    }
    movement(): void {
        console.log(`${this.name} is dealing fatal blow`);
    }
    action(): void {
        console.log(`${this.name} was attacked`);
    }
}

class Playable extends Character {
    constructor(public name:string) {
        super(name);
        // console.log(`Character.${this.name} was created ...`);
    }
    movement(): void {
        console.log(`${this.name} is dealing fatal blow`);
    }
    action(): void {
        console.log(`${this.name} was attacked`);
    }
}
class NPC extends Character {
    constructor(public name:string) {
        super(name);
        // console.log(`Character.${this.name} was created ...`);
    }
    movement(): void {
        console.log(`${this.name} is slowly approaching you`);
    }
    action(): void {
        console.log(`${this.name} greets you.`);
    }
}

abstract class Factory {
    protected constructor() { }
    createGameElement(name:string, elementType: ElementsType | EquipmentType | EnemyType | CharacterType) { }
}

class EquipmentFactory extends Factory {
    constructor() {
        super();
    }
    createGameElement(name:string, elementType: EquipmentType) {
        switch (elementType) {
            case EquipmentType.Armor:
                return new Armor(name);
            case EquipmentType.Weapon:
                return new Weapon(name);
            case EquipmentType.Consumable:
                return new Consumable(name);
            default:
                throw("Unsupported GameElement type");
        }
    }
}
class EnemyFactory extends Factory {
    constructor() {
        super();
    }
    createGameElement(name:string, elementType: EnemyType) {
        switch (elementType) {
            case EnemyType.Human:
                return new Human(name);
            case EnemyType.Animal:
                return new Animal(name);
            case EnemyType.Undead:
                return new Undead(name);
            default:
                throw("Unsupported GameElement type");
        }
    }
}
class CharacterFactory extends Factory {
    constructor() {
        super();
    }
    createGameElement(name:string, elementType: CharacterType) {
        switch (elementType) {
            case CharacterType.Playable:
                return new Playable(name);
            case CharacterType.NPC:
                return new NPC(name);
            default:
                throw("Unsupported GameElement type");
        }
    }
}

class ArmorFactory extends EquipmentFactory {
    constructor() {
        super();
    }
    createGameElement(name: string) {
        return new Armor(name);
    }
}
class WeaponFactory extends EquipmentFactory {
    constructor() {
        super();
    }
    createGameElement(name: string) {
        return new Weapon(name);
    }
}
class ConsumableFactory extends EquipmentFactory {
    constructor() {
        super();
    }
    createGameElement(name: string) {
        return new Consumable(name);
    }
}

class HumanFactory extends EnemyFactory {
    constructor() {
        super();
    }
    createGameElement(name: string) {
        return new Human(name);
    }
}
class AnimalFactory extends EnemyFactory {
    constructor() {
        super();
    }
    createGameElement(name: string) {
        return new Animal(name);
    }
}
class UndeadFactory extends EnemyFactory {
    constructor() {
        super();
    }
    createGameElement(name: string) {
        return new Undead(name);
    }
}

class PlayableFactory extends CharacterFactory {
    constructor() {
        super();
    }
    createGameElement(name: string) {
        return new Playable(name);
    }
}
class NPCFactory extends CharacterFactory {
    constructor() {
        super();
    }
    createGameElement(name: string) {
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