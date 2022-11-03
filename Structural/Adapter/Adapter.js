var VGA = /** @class */ (function () {
    function VGA() {
    }
    VGA.prototype.useVGA = function () {
        console.log('Using VGA cable...');
    };
    return VGA;
}());
var HDMI = /** @class */ (function () {
    function HDMI() {
    }
    HDMI.prototype.useHDMI = function () {
        console.log('Using HDMI cable...');
    };
    return HDMI;
}());
var VGAtoHDMIAdapter = /** @class */ (function () {
    function VGAtoHDMIAdapter(hdmi) {
        this.hdmiCable = hdmi;
    }
    VGAtoHDMIAdapter.prototype.useVGA = function () {
        console.log('Want to use VGA cable, converting to HDMI...');
        this.hdmiCable.useHDMI();
    };
    return VGAtoHDMIAdapter;
}());
var hdmi = new HDMI();
var adapter = new VGAtoHDMIAdapter(hdmi);
adapter.useVGA();
