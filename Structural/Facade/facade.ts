class LightingSystem {
    changeLighting() {
        console.log('Changing lighting...');
    }
    turnOn() {
        console.log('Turning lighting on...');
    }
    turnOff() {
        console.log('Turning lighting off...');
    }
}
class SoundSystem {
    changeVolume() {
        console.log('Changing volume...');
    }
    turnOn() {
        console.log('Turning sounds on...');
    }
    turnOff() {
        console.log('Turning sounds off...');
    }
}
class DisplaySystem {
    turnOn() {
        console.log('Turning TV on...');
    }
    turnOff() {
        console.log('Turning TV off...');
    }
}
class TemperatureSystem {
    changeTemperature() {
        console.log('Changing temperature...');
    }
    turnOn() {
        console.log('Turning temperature system on...');
    }
    turnOff() {
        console.log('Turning temperature system off...');
    }
}
class SecuritySystem {
    turnOn() {
        console.log('Turning cameras on...');
    }
    turnOff() {
        console.log('Turning cameras off...');
    }
}
class FireFightingSystem {
    turnOn() {
        console.log('Turning fire fighting system on...');
    }
    turnOff() {
        console.log('Turning fire fighting system off...');
    }
}
class IrrigationSystem {
    turnOn() {
        console.log('Turning irrigation on...');
    }
    turnOff() {
        console.log('Turning irrigation off...');
    }
}

class SmartHomeFacade {
    private lightingSystem: LightingSystem;
    private soundSystem: SoundSystem;
    private displaySystem: DisplaySystem;
    private temperatureSystem: TemperatureSystem;
    private securitySystem: SecuritySystem;
    private fireFightingSystem: FireFightingSystem;
    private irrigationSystem: IrrigationSystem;

    constructor(lightingSystem: LightingSystem, soundSystem: SoundSystem, displaySystem: DisplaySystem, temperatureSystem: TemperatureSystem, securitySystem: SecuritySystem, fireFightingSystem: FireFightingSystem, irrigationSystem: IrrigationSystem) {
        this.lightingSystem = lightingSystem;
        this.soundSystem = soundSystem;
        this.displaySystem = displaySystem;
        this.temperatureSystem = temperatureSystem;
        this.securitySystem = securitySystem;
        this.fireFightingSystem = fireFightingSystem;
        this.irrigationSystem = irrigationSystem;
    }

    public watchTV() {
        this.lightingSystem.changeLighting();
        this.displaySystem.turnOn();
        this.soundSystem.changeVolume();
        this.temperatureSystem.changeTemperature();
    }
}

let lightingSystem = new LightingSystem();
let soundSystem = new SoundSystem();
let displaySystem = new DisplaySystem();
let temperatureSystem = new TemperatureSystem();
let securitySystem = new SecuritySystem();
let fireFightingSystem = new FireFightingSystem();
let irrigationSystem = new IrrigationSystem();

let smartHome = new SmartHomeFacade(lightingSystem, soundSystem, displaySystem, temperatureSystem, securitySystem, fireFightingSystem, irrigationSystem);
smartHome.watchTV();

