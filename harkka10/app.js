var http = require('http');
var fs = require('fs');

var port = 3000;
var host = '192.168.1.16';

console.log('Server started at ' + host +':'+ port);
http.createServer(function(req,res) {

	res.writeHead(200, {'Content-Type': 'text/html' });
	var html = fs.readFileSync(__dirname + '/index.html', 'UTF-8');
	var message = 'Testing testing.. öäöäö';
	html = html.replace('{Message}', message);
	res.end(html);
}).listen(port, host);
