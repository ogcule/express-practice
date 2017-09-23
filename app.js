//Require the stuff needed
let express = require('express');
let http = require("http");
//Build the app
let app = express();

//Add some middleware
app.use(function(request, response) {
  response.writehead(200, {"Content-Type": "text/plain"});
  response.end("Hello world!\n");
};

//start it up!
http.createServer(app).listen(3000);
