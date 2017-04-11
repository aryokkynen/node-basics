var http = require('http');
var fs = require('fs');

var port = 3000;
var host = '192.168.1.16';

console.log('Server started at ' + host +':'+ port);
http.createServer(function(req,res) {
	
	var person = {

		firstname: 'John',
		lastname: 'Doe'

	};

	if (req.url === '/'){

		res.writeHead(200,  {'Content-Type': 'text/html' });
        	fs.createReadStream(__dirname + '/index.html').pipe(res);
		console.log('/ endpoint called');

	} else if (req.url === '/api'){

		res.writeHead(200, {'Content-Type': 'application/json' });
       		res.end(JSON.stringify(person));
		console.log('/api endoint called');

	} else {
		res.writeHead(404);
		res.end('404 - Page not found');	
		console.log('404 served, not supported endpoint');
	}
		
}).listen(port, host);
