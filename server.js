require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
var db = require('./models');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/static', express.static(path.join(__dirname, 'public/build/static')));

require('./routes/api-routes')(app);
require('./routes/html-routes')(app);

var syncOptions = { force: false };

db.sequelize.sync().then(function() {
	app.listen(PORT, function() {
		console.log(
			'==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.',
			PORT,
			PORT
		);
	});
});

module.exports = app;
