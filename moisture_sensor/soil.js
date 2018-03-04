var Gpio = require('onoff').Gpio;
  led = new Gpio(27, 'out');
var Mcp3008 = require('mcp3008.js');
    adc = new Mcp3008();
    channel = 1;
adc.poll(channel,1003, function (value) {
    console.log("The soil humidity is: "+value);
    if(value<500){
	led.writeSync(1);
    }
    else{
	led.writeSync(0);
    }	
});

