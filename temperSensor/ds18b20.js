var fs = require('fs');

try {  
    var data = fs.readFileSync('/sys/bus/w1/devices/28-000008e853a2/w1_slave', 'utf8');
    var word = data.split(" ")[20];
    var temperature = word.split("=")[1];
    console.log("The temperature is: " + temperature/1000 + " Celsius");    
} catch(e) {
    console.log('Error:', e.stack);
}
