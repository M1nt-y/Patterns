interface IHandler {
    setNext(handler: IHandler): IHandler;
    handle(request: string): string;
}

abstract class Handler implements IHandler
{
    private nextHandler: IHandler;
    public setNext(handler: IHandler): IHandler {
        this.nextHandler = handler;
        return handler;
    }
    public handle(request: string): string {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        return null;
    }
}

class SeniorDev extends Handler {
    public handle(request: string): string {
        if (request === 'Above average') {
            return `Senior: I'll take the ${request} difficulty task.`;
        }
        return super.handle(request);
    }
}

class MiddleDev extends Handler {
    public handle(request: string): string {
        if (request === 'Below average') {
            return `Mid: I'll take the ${request} difficulty task.`;
        }
        return super.handle(request);
    }
}

class JuniorDev extends Handler {
    public handle(request: string): string {
        if (request === 'Hard') {
            return `Junior: Damn.. only the ${request} task left, I'll try to do it somehow....`;
        }
        return super.handle(request);
    }
}

function clientCode(handler: IHandler) {
    const tasks = ['Above average', 'Below average', 'Hard'];
    for (const task of tasks) {
        console.log(`Client: Who wants a ${task} task?`);
        const result = handler.handle(task);
        if (result) {
            console.log(`  ${result}`);
        } else {
            console.log(`  ${task} was left untouched.`);
        }
    }
}

const senior = new SeniorDev();
const middle = new MiddleDev();
const junior = new JuniorDev();

senior.setNext(middle).setNext(junior);

console.log('Chain: Senior > Middle > Junior\n');
clientCode(senior);
// console.log('');
// console.log('Subchain: Middle > Junior\n');
// clientCode(middle);