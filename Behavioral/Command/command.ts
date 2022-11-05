interface ICommand {
    execute(): void;
}

class SimpleCommand implements ICommand {
    private readonly payload: string;
    constructor(payload: string) {
        this.payload = payload;
    }
    public execute(): void {
        console.log(`SimpleCommand: See, I can do simple things like printing (${this.payload})`);
    }
}

class ChangePosition implements ICommand {
    private receiver: Receiver;
    private readonly x: string;
    private readonly y: string;
    constructor(receiver: Receiver, x: string, y: string) {
        this.receiver = receiver;
        this.x = x;
        this.y = y;
    }
    public execute(): void {
        console.log('ChangePosition: Complex stuff should be done by a receiver object.');
        this.receiver.moveHorizontally(this.x);
        this.receiver.moveVertically(this.y);
    }
}

class Receiver {
    public moveHorizontally(x: string): void {
        console.log(`Receiver: Moving to X: ${x} pos.`);
    }
    public moveVertically(y: string): void {
        console.log(`Receiver: Moving to Y: ${y} pos.`);
    }
}

class Invoker {
    private onStart: ICommand;
    private onFinish: ICommand;
    public setOnStart(command: ICommand): void {
        this.onStart = command;
    }
    public setOnFinish(command: ICommand): void {
        this.onFinish = command;
    }

    public doSomethingImportant(): void {
        console.log('Invoker: Does anybody want something done before I begin?');
        if (this.isCommand(this.onStart)) {
            this.onStart.execute();
        }
        console.log('Invoker: ...doing something really important...');
        console.log('Invoker: Does anybody want something done after I finish?');
        if (this.isCommand(this.onFinish)) {
            this.onFinish.execute();
        }
    }
    private isCommand(object): object is ICommand {
        return object.execute !== undefined;
    }
}

const invoker = new Invoker();
invoker.setOnStart(new SimpleCommand('Say Hi!'));
const receiver = new Receiver();
invoker.setOnFinish(new ChangePosition(receiver, '34', '129'));
invoker.doSomethingImportant();