var http = require('http');
var fs = require('fs');

var port = 3000;
var host = '192.168.1.16';

console.log('Server started at ' + host +':'+ port);
http.createServer(function(req,res) {

	res.writeHead(200, {'Content-Type': 'application/json' });

	var person = {

		firstname: 'John',
		lastname: 'Doe'

	};

	res.end(JSON.stringify(person));

	
		
}).listen(port, host);
