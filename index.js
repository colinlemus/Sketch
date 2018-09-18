require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
var db = require('./models');
var path = require('path');
var app = express();
var WSReadyStates = require('./constants/ws-ready-states');
var expressWs = require('express-ws')(app); // Websocket
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/static', express.static(path.join(__dirname, 'app/public/build/static')));

require('./routes/api-routes')(app);
require('./routes/html-routes')(app);

var syncOptions = { force: false };

// Websocket
app.ws('/game-chat', function(ws, req) {
//	console.log(ws,"ws");
//	console.log(req,"req");

	ws.on('message', function(msg) {
	  console.log("backend msg: ", msg);

	  expressWs.getWss().clients.forEach(function(client) {

		if (client !== ws && client.readyState === WSReadyStates.OPEN) {
			client.send(msg);
		}
	  })
	});
});

app.use((req, res, next) => {
	res.sendFile(path.join(__dirname, 'public', 'build', 'index.html'));
});


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
