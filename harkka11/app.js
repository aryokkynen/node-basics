var http = require('http');
var fs = require('fs');

var port = 3000;
var host = '192.168.1.16';

console.log('Server started at ' + host +':'+ port);
http.createServer(function(req,res) {

	res.writeHead(200, {'Content-Type': 'text/html' });
	fs.createReadStream(__dirname + '/index.html').pipe(res);
		
}).listen(port, host);
