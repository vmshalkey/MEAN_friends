var friends = require('./../controllers/friends.js');

module.exports = function(app) {
	app.get('/friends', function(req, res) {
		friends.show(req, res);
	});

	app.post('/friends/new', function(req, res) {
		friends.create(req, res);
	});
};