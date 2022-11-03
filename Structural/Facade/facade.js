var LightingSystem = /** @class */ (function () {
    function LightingSystem() {
    }
    LightingSystem.prototype.changeLighting = function () {
        console.log('Changing lighting...');
    };
    LightingSystem.prototype.turnOn = function () {
        console.log('Turning lighting on...');
    };
    LightingSystem.prototype.turnOff = function () {
        console.log('Turning lighting off...');
    };
    return LightingSystem;
}());
var SoundSystem = /** @class */ (function () {
    function SoundSystem() {
    }
    SoundSystem.prototype.changeVolume = function () {
        console.log('Changing volume...');
    };
    SoundSystem.prototype.turnOn = function () {
        console.log('Turning sounds on...');
    };
    SoundSystem.prototype.turnOff = function () {
        console.log('Turning sounds off...');
    };
    return SoundSystem;
}());
var DisplaySystem = /** @class */ (function () {
    function DisplaySystem() {
    }
    DisplaySystem.prototype.turnOn = function () {
        console.log('Turning TV on...');
    };
    DisplaySystem.prototype.turnOff = function () {
        console.log('Turning TV off...');
    };
    return DisplaySystem;
}());
var TemperatureSystem = /** @class */ (function () {
    function TemperatureSystem() {
    }
    TemperatureSystem.prototype.changeTemperature = function () {
        console.log('Changing temperature...');
    };
    TemperatureSystem.prototype.turnOn = function () {
        console.log('Turning temperature system on...');
    };
    TemperatureSystem.prototype.turnOff = function () {
        console.log('Turning temperature system off...');
    };
    return TemperatureSystem;
}());
var SecuritySystem = /** @class */ (function () {
    function SecuritySystem() {
    }
    SecuritySystem.prototype.turnOn = function () {
        console.log('Turning cameras on...');
    };
    SecuritySystem.prototype.turnOff = function () {
        console.log('Turning cameras off...');
    };
    return SecuritySystem;
}());
var FireFightingSystem = /** @class */ (function () {
    function FireFightingSystem() {
    }
    FireFightingSystem.prototype.turnOn = function () {
        console.log('Turning fire fighting system on...');
    };
    FireFightingSystem.prototype.turnOff = function () {
        console.log('Turning fire fighting system off...');
    };
    return FireFightingSystem;
}());
var IrrigationSystem = /** @class */ (function () {
    function IrrigationSystem() {
    }
    IrrigationSystem.prototype.turnOn = function () {
        console.log('Turning irrigation on...');
    };
    IrrigationSystem.prototype.turnOff = function () {
        console.log('Turning irrigation off...');
    };
    return IrrigationSystem;
}());
var SmartHomeFacade = /** @class */ (function () {
    function SmartHomeFacade(lightingSystem, soundSystem, displaySystem, temperatureSystem, securitySystem, fireFightingSystem, irrigationSystem) {
        this.lightingSystem = lightingSystem;
        this.soundSystem = soundSystem;
        this.displaySystem = displaySystem;
        this.temperatureSystem = temperatureSystem;
        this.securitySystem = securitySystem;
        this.fireFightingSystem = fireFightingSystem;
        this.irrigationSystem = irrigationSystem;
    }
    SmartHomeFacade.prototype.watchTV = function () {
        this.lightingSystem.changeLighting();
        this.displaySystem.turnOn();
        this.soundSystem.changeVolume();
        this.temperatureSystem.changeTemperature();
    };
    return SmartHomeFacade;
}());
var lightingSystem = new LightingSystem();
var soundSystem = new SoundSystem();
var displaySystem = new DisplaySystem();
var temperatureSystem = new TemperatureSystem();
var securitySystem = new SecuritySystem();
var fireFightingSystem = new FireFightingSystem();
var irrigationSystem = new IrrigationSystem();
var smartHome = new SmartHomeFacade(lightingSystem, soundSystem, displaySystem, temperatureSystem, securitySystem, fireFightingSystem, irrigationSystem);
smartHome.watchTV();
