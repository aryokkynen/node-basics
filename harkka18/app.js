// projektin aloittamiseksi annettiin komennot
// npm init
// npm install express --save
// npm install mysql --save
// npm install ejs --save
// entry-point muutettu app.js nyt ennen index.js

// Meaning of rest: HTTP verbs and URL's mean something

var express = require('express');
var app = express();
var mysql =require('mysql');


var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function(req, res, next) {

	var con = mysql.createConnection({

		host: 'localhost',
		user: 'username',
		password: 'password',
		database: 'database'

	});

	con.query('SELECT * from kortit', 
		function(err, rows) {

		if(err) throw err;

			console.log(rows);
			console.log(rows[0].id);
		}
	);


   	 console.log('Request Url:' + req.url);
	
	 next();
});
htmlController(app);
apiController(app);
app.listen(port);
