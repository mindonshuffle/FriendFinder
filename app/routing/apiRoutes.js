var path = require("path");
var friends = require('../data/friends.js');

//accepts a new friend's data and finds the best match in the 'database'
function findMatch(newFriend){

	var bestMatchIndex = null;
	var bestMatchScore = null;

	//iterates over the array of friends 
	for( var i = 0; i < friends.length; i++ ){

		var currentMatchScore = 0;

		//comparing each of their survey answers
		for( var j = 1; j < 11; j++ ){

			var currentQuestion = 'question' + j;
			currentMatchScore = currentMatchScore + Math.abs( friends[i][currentQuestion] - newFriend[currentQuestion] );

		}

		//if this score is better than all priors, set this friend as the best match
		if( currentMatchScore < bestMatchScore || bestMatchScore === null ){
			bestMatchScore = currentMatchScore;
			bestMatchIndex = i;
		}

	}

	// console.log('Best Match is:');
	// console.log(friends[bestMatchIndex].name);

	return(bestMatchIndex);

}

module.exports = function (app){
		
	//for api get request, send back the array of friends
	app.get('/api/friends', function(req, res){
		console.log('api/friends');
  		res.send(friends);

	});

	//for post request, find best match, push new friend to array, then return best match
	app.post("/api/new", function(req, res) {

		var newFriend = req.body;
		
		//find the best match's index
		var bestMatchIndex = findMatch(newFriend);

		//add new friend to 'database'
		friends.push(newFriend);

		//send best match's object to client
		res.json(friends[bestMatchIndex]);
		
	});

};