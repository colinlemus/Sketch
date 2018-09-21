require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
var db = require('./models');
var path = require('path');
var app = express();
var WSReadyStates = require('./constants/ws-ready-states');
var PORT = process.env.PORT || 8080;
var expressWs = require('express-ws')(app); // Websocket


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/static', express.static(path.join(__dirname, 'public/build/static')));

require('./routes/api-routes')(app);
require('./routes/html-routes')(app);

var syncOptions = { force: false };

// Websocket
app.ws('/game', function(ws, req) {

	ws.on('message', function(msg) {
	  console.log("backend msg: ", msg);

	  expressWs.getWss().clients.forEach(function(client) {
		  console.log('# of clients connected',client._socket.server._connections);

		if (client !== ws && client.readyState === WSReadyStates.OPEN) {
			client.send(msg);
			// console.log('msg',msg);
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
