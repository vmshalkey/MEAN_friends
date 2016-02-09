//connects to MongoDB and loads all models

//require mongoose
var mongoose = require('mongoose');
//require file-system for the model files
var fs = require('fs');
//connnect to db
mongoose.connect('mongodb://localhost/FullMean_Friends');
//specify the path to all of the models
var models_path = __dirname + '/../models'
// read all of the files in the models_path and for each one check if js
fs.readdirSync(models_path).forEach(function(file) {
	if(file.indexOf('.js') > 0) {
		require(models_path + '/' + file);
	}
})