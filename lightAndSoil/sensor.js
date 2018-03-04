var Mcp3008 = require('mcp3008.js');
var Gpio = require('onoff').Gpio;
    adc = new Mcp3008();
    led = new Gpio(27, 'out');
    channel_Light = 7;
    channel_soil = 1;
adc.poll(channel_Light,1000, function (value) {
    console.log("The intensity of ambient light is: "+value);
});
adc.poll(channel_soil,1003, function (value) {
    console.log("The soil humidity is: "+value);
    if(value<500){
	led.writeSync(1);
    }
    else{
	led.writeSync(0);
    }	
});


