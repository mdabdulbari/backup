var express = require('express');
var routes = require('./routes/routes');

var app = express();

routes(app);

var server = app.listen(8080, function() {
    console.log("app running on port: ", server.address().port);
})
