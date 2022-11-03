abstract class Account {
    public description: string;
    public plan?: string;
    public getDescription(): string {
        return this.description;
    }
}

class Basic extends Account {
    public plan = 'Basic';
    public getDescription(): string {
        return `${this.plan} Account`;
    }
}

abstract class Features extends Account {
    appliedFeature: Account;
    public abstract expBonus(): number;
    public abstract price(): number;
    public abstract getDescription(): string;
}

class Vip extends Features {
    plan = 'Vip';
    appliedFeature: Account;
    constructor(account: Account) {
        super();
        this.appliedFeature = account;
        this.appliedFeature.plan = this.plan;
    }
    expBonus(): number { return 15; }
    price(): number { return 100; }
    public getDescription(): string {
        return this.appliedFeature.getDescription() + `, price: ${this.price().toFixed()} UAH, applied feature: EXP bonus +${this.expBonus().toFixed()}%`;
    }
}

class Premium extends Features {
    appliedFeature: Account;
    plan = 'Premium';
    constructor(account: Account) {
        super();
        this.appliedFeature = account;
        this.appliedFeature.plan = this.plan;
    }
    expBonus(): number { return 25; }
    price(): number { return 250; }
    public getDescription(): string {
        return this.appliedFeature.getDescription() + `, price: ${this.price().toFixed()} UAH, applied feature: EXP bonus +${this.expBonus().toFixed()}%`;
    }
}

let myAccount = new Basic();
console.log(myAccount.getDescription());
let mySecondAccount = new Vip(myAccount);
console.log(mySecondAccount.getDescription());
let myPremiumAccount = new Premium(myAccount);
console.log(myPremiumAccount.getDescription());
