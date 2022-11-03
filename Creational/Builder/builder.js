var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class GameGraphicsSubsystem {
    constructor(n) {
        this.name = n;
    }
    execute() {
        console.log('Executing ' + this.name + ' subsystem...');
    }
}
class GameLogicSubsystem {
    constructor(n) {
        this.name = n;
    }
    execute() {
        console.log('Executing ' + this.name + ' subsystem...');
    }
}
class GameSoundsSubsystem {
    constructor(n) {
        this.name = n;
    }
    execute() {
        console.log('Executing ' + this.name + ' subsystem...');
    }
}
class GameNetworkSubsystem {
    constructor(n) {
        this.name = n;
    }
    execute() {
        console.log('Executing ' + this.name + ' subsystem...');
    }
}
class GameWorld {
    constructor(map) {
        this.gameMap = map;
        console.log('Generating map: ' + this.gameMap);
    }
}
class Game {
    constructor(gw) {
        this.gameWorld = gw;
        this.subsystemsList = [];
    }
    addSubsystem(ss) {
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
    constructor() { }
    initGraphicsSubsystem() {
        return new GameGraphicsSubsystem("GPU");
    }
    buildGameWorld(gm) {
        return new GameWorld(gm);
    }
    buildGameLogic() {
        return new GameLogicSubsystem("game logic");
    }
    initSoundSubsystem() {
        return new GameSoundsSubsystem("audio");
    }
    initNetworkSubsystem() {
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
}
class MainApp {
    constructor() {
        this.gameBuilder = new GameBuilder();
    }
    main() {
        return __awaiter(this, void 0, void 0, function* () {
            const game1 = yield this.gameBuilder.offlineGame();
            setInterval(() => {
                game1.renderWorld();
                game1.updateGame();
            }, 2000);
        });
    }
}
const mainApp = new MainApp();
mainApp.main();
