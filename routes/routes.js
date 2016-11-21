// pass in the app variable from app.js
var appRouter = function(app) {

	// End point "/"
	// When a client posts a get with a "/" url
	// return Hello World as a response
	app.get("/", function(req, res) {
		res.send("Hello World");
	});

	// end point "/account"
	app.get("/account", function(req, res) {
		res.send("ASHER");
	});
 
}

// export the appRouter variable to be used by whatever calls it
// This means anything found in the appRouter function will be usable 
module.exports = appRouter;