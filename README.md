# SimpleAPI
Taken from https://www.thepolyglotdeveloper.com/2015/10/create-a-simple-restful-api-with-node-js/

To run:
Open a cmd tool
cd c:\SimpleAPI (or wherever SimpleAPI is located)
npm install
node app.js

Then open a browser and go to:
http://localhost:3000/ 
to call the "/" endpoint

Go to http://localhost:3000/account
to call the "/account" endpoint.


All endpoints are in the routes/routes.js file.

Uses express to provide web framework.
Uses bodyParser to handle URL requests in JSON and url encoded requests

app.js:
- sets out where the endpoints are defined:
var routes = require("./routes/routes.js")(app);

- sets port to listen on
var server = app.listen(3000, function () {
    console.log("Listening on port %s...", server.address().port);
});
