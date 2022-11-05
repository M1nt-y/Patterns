abstract class GamingDevice {
    public templateMethod(): void {
        this.turnOn();
        this.launchGame();
        this.closeGame();
        this.hook1();
        this.uniqueOperation();
        this.turnOff();
    }

    protected turnOn(): void {
        console.log('GamingDevice: Turning on...');
    }
    protected closeGame(): void {
        console.log('GamingDevice: Closing game...');
    }
    protected turnOff(): void {
        console.log('GamingDevice: Turning off...');
    }

    protected abstract launchGame(): void;
    protected abstract uniqueOperation(): void;
    protected hook1(): void { }
}

class PersonalComputer extends GamingDevice {
    protected launchGame(): void {
        console.log('PersonalComputer: Launching PC game...');
    }
    protected uniqueOperation(): void {
        console.log('PersonalComputer: Unique for PC operation');
    }
}
class PlayStation extends GamingDevice {
    protected launchGame(): void {
        console.log('PlayStation: Launching PS5 game');
    }
    protected uniqueOperation(): void {
        console.log('PlayStation: Unique for PS5 operation');
    }
}


function executeTemplateMethod(abstractClass: GamingDevice) {
    abstractClass.templateMethod();
}
console.log('Same client code can work with different subclasses:');
executeTemplateMethod(new PersonalComputer());
console.log('');
console.log('Same client code can work with different subclasses:');
executeTemplateMethod(new PlayStation());