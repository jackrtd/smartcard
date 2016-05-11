'use strict';

const api = require('../lib/index');
const Devices = api.Devices;
const devices = new Devices();


devices.onActivated().then(event => {
    const currentDevices = event.devices;
    let device = event.device;
    console.log(`Device '${device}' activated, devices: ${currentDevices}`);
    currentDevices.map((device, index) => {
        console.log(`Device #${index + 1}: ${device.name}`);
    });
});