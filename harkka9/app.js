var http = require('http');
var fs = require('fs');

var index = fs.readFileSync(__dirname + '/index.html');



http.createServer(function(req,res) {

	res.writeHead(200, {'Content-Type': 'text/html' });
	res.end(index);

}).listen(3000, '192.168.1.16');
