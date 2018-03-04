var Gpio = require('onoff').Gpio;
  led = new Gpio(21, 'out');
  led.writeSync(1);

