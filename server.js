//require express
var express = require('express');
//require path
var path = require('path');
//instantiate the app
var app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//requires mongoose.js file
require('./server/config/mongoose.js');

//requires and runs code from routes.js and passes it to app
require('./server/config/routes.js')(app);

//set up static file server that points to the "client" directory
app.use(express.static(path.join(__dirname, './client')));
app.listen(8001, function() {
	console.log('listening on port 8001');
});