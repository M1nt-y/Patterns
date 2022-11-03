interface ISubsystem {
    name: string;
    execute(): void;
}

class GameGraphicsSubsystem implements  ISubsystem {
    name: string;
    constructor(n: string) {
        this.name = n;
    }
    execute() {
        console.log('Executing ' + this.name + ' subsystem...');
    }
}
class GameLogicSubsystem implements  ISubsystem {
    name: string;
    constructor(n: string) {
        this.name = n;
    }
    execute() {
        console.log('Executing ' + this.name + ' subsystem...');
    }
}
class GameSoundsSubsystem implements  ISubsystem {
    name: string;
    constructor(n: string) {
        this.name = n;
    }
    execute() {
        console.log('Executing ' + this.name + ' subsystem...');
    }
}
class GameNetworkSubsystem implements  ISubsystem {
    name: string;
    constructor(n: string) {
        this.name = n;
    }
    execute() {
        console.log('Executing ' + this.name + ' subsystem...');
    }
}


class GameWorld {
    gameMap: string;
    constructor(map: string) {
        this.gameMap = map;
        console.log('Generating map: ' + this.gameMap)
    }
}

class Game {
    private gameWorld;
    private subsystemsList: ISubsystem[];

    constructor(gw: GameWorld) {
        this.gameWorld = gw;
        this.subsystemsList = [];
    }
    addSubsystem(ss: ISubsystem) {
        ss.execute();
        this.subsystemsList.push(ss);
    }
    renderWorld() {
        const time = new Date();
        console.log(`Rendering at ${time.toLocaleTimeString()} ...`);
    }
    updateGame() {
        const time = new Date();
        console.log(`Updating at ${time.toLocaleTimeString()} ...`);
    }
}

class GameBuilder {
    constructor() {}

    private initGraphicsSubsystem(): GameGraphicsSubsystem {
        return new GameGraphicsSubsystem("GPU");
    }
    private buildGameWorld(gm: string): GameWorld {
        return new GameWorld(gm);
    }
    private buildGameLogic(): GameLogicSubsystem {
        return new GameLogicSubsystem("game logic");
    }
    private initSoundSubsystem(): GameSoundsSubsystem {
        return new GameSoundsSubsystem("audio");
    }
    private initNetworkSubsystem(): GameNetworkSubsystem {
        return new GameNetworkSubsystem("network");
    }

    offlineGame() {
        const gameWorld = this.buildGameWorld('Map-1');
        const game = new Game(gameWorld);
        const graphics = this.initGraphicsSubsystem();
        game.addSubsystem(graphics);
        game.addSubsystem(this.buildGameLogic());
        game.addSubsystem(this.initSoundSubsystem());
        return game;
    }
    // onlineGame() {
    //     const gameWorld = this.buildGameWorld('Map-2');
    //     const game = new Game(gameWorld);
    //     const graphics = this.initGraphicsSubsystem();
    //     game.addSubsystem(graphics);
    //     game.addSubsystem(this.buildGameLogic());
    //     game.addSubsystem(this.initSoundSubsystem());
    //     game.addSubsystem(this.initNetworkSubsystem());
    //     return game;
    // }
}

class MainApp {
    gameBuilder = new GameBuilder();
    async main() {
        const game1: Game = await this.gameBuilder.offlineGame();
        setInterval(() => {
            game1.renderWorld();
            game1.updateGame();
        }, 2000);
    }
}

const mainApp = new MainApp();
mainApp.main();