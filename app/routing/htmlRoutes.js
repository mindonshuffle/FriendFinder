var path = require("path");

module.exports = function (app){

	//for survey route, serve client the survey html
	app.get('/survey', function(req, res){
		console.log('Send: Survey Page');
  		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});

	//for any other get request, serve the home page
	app.get('*', function(req, res){
		console.log('Send: Home Page');
  		res.sendFile(path.join(__dirname, "../public/home.html"));
	});
	
}