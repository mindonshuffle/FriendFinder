var path = require("path");

module.exports = function (app){

	app.get('/survey', function(req, res){
		console.log('Send: Survey Page');
  		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});

	app.get('*', function(req, res){
		console.log('Send: Home Page');
  		res.sendFile(path.join(__dirname, "../public/home.html"));
	});
	
}