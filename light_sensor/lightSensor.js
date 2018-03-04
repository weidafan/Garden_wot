var Mcp3008 = require('mcp3008.js');
    adc = new Mcp3008();
    channel = 7;
adc.poll(7,1000, function (value) {
    console.log("The intensity of ambient light is: "+value);
});

