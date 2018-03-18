// Final version
var express = require('express'),
  actuatorsRoutes = require('./../routes/actuators'),
  sensorRoutes = require('./../routes/sensors'),
  thingsRoutes = require('./../routes/things'),
  resources = require('./../resources/model'),
  converter = require('./../middleware/converter'),
  cors = require('cors'),
  bodyParser = require('body-parser');
  // var path = require('path')
var app = express();
app.use(express.static('./resources'));
app.use(bodyParser.json());
app.use(cors());
app.use('/pi/actuators', actuatorsRoutes);
app.use('/pi/sensors', sensorRoutes);
app.use('/things', thingsRoutes);

// app.engine('.html', require('ejs').__express);
// app.set('views', __dirname + '/View');
// app.set('view engine', 'html');
// app.get('/pi/sensors/humidity', function(req, res){
//   res.sendFile('humidity.html', { root: './resources' });
// });

app.get('/pi', function(req, res){
    res.sendFile('index.html', { root: './resources' });
});

app.post('/openValve',(req, res) => {
  if(resources.pi.actuators.valve.status){
    resources.pi.actuators.valve.status= false;
    // res.send('water valve is off');
  }
  else{
    resources.pi.actuators.valve.status= true;
    // res.send('water valve is on');
  }
    console.log("VALVE STATUS CHANGE TO "+resources.pi.actuators.valve.status);
    res.redirect('/humidity.html')
});
app.post('/openLED',(req, res) => {
  if(resources.pi.actuators.leds.value){
    resources.pi.actuators.leds.value= false;
    // res.send('water valve is off');
  }
  else{
    resources.pi.actuators.leds.value= true;
    // res.send('water valve is on');
  }
    console.log("LED STATUS CHANGE TO "+resources.pi.actuators.leds.value);
    res.redirect('/humidity.html')
});
// app.get('/pi/sensors/temperature', function(req, res){
//   res.sendFile('temperature.html', { root: './resources' });
// });

// For representation design
app.use(converter());
module.exports = app;


/*
 //Initial version:

var express = require('express'),
  actuatorsRoutes = require('./../routes/actuators'),
  sensorRoutes = require('./../routes/sensors'),
  resources = require('./../resources/model'), //#A
  cors = require('cors'); 

var app = express(); //#B

app.use(cors()); //#C

app.use('/pi/actuators', actuatorsRoutes); //#D
app.use('/pi/sensors', sensorRoutes);

app.get('/pi', function (req, res) { //#E
  res.send('This is the WoT-Pi!')
});

module.exports = app;

//#A Requires the Express framework, your routes, and the model
//#B Creates an application with the Express framework; this wraps an HTTP server
//#C Enable CORS support (see section 6.1.5)
//#D Binds your routes to the Express application; bind them to /pi/actuators/... and /pi/sensors/...
//#E Create a default route for /pi

*/