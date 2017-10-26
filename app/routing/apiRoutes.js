var path = require("path");
var friends = require('../data/friends.js');

module.exports = function (app){
	app.get('/api/friends', function(req, res){
		console.log('api/friends');
  		res.send(friends);

	});

	// Reserve Table

	app.post("/api/new", function(req, res) {

		var newFriend = req.body;
		console.log(newFriend);

		friends.push(newFriend);
		
		res.json(newFriend);
		
	});

};