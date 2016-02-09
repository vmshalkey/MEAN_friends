var mongoose = require('mongoose');

var Friend = mongoose.model('Friend');


module.exports = (function() {
	return {
		show: function(req, res) {
			Friend.find({}, function(err, results) {
				if(err) {
					console.log(err);
				} else {
					res.json(results);
				}
			})
		},

		create: function(req, res) {
			console.log("Server/ Ctrl / Users - Create");
			var friend = new Friend;
			console.log(friend);
			console.log(req.body);
			friend.name = req.body.name;
			friend.age = req.body.age;
			friend.save(function(err){
				if(err) {
					res.json({status:false});
				} else {
					res.json({status:true});
				}
			})
		}
	}
})();