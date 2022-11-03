class VGA {
    useVGA() {
        console.log('Using VGA cable...');
    }
}
class HDMI {
    useHDMI() {
        console.log('Using HDMI cable...');
    }
}

class VGAtoHDMIAdapter implements VGA{
    hdmiCable: HDMI;
    constructor(hdmi: HDMI) {
        this.hdmiCable = hdmi;
    }
    useVGA() {
        console.log('Want to use VGA cable, converting to HDMI...');
        this.hdmiCable.useHDMI();
    }
}

const hdmi = new HDMI();
const adapter = new VGAtoHDMIAdapter(hdmi);
adapter.useVGA();