var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

app.get('/', function(req, res) {

	res.send('<html><head><title>Hello World</title></head><body><h1>Hello</h1></body></html>');

});
console.log('Server up on port ' + port);
app.listen(port);

