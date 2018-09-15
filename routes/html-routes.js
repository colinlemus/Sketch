<<<<<<< Updated upstream
=======
var db = require('../models');
>>>>>>> Stashed changes
var path = require('path');

module.exports = function(app) {
	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, '../', 'public', 'build', 'index.html'));
	});

<<<<<<< Updated upstream
	// app.get('*', function(req, res) {
	// 	console.log("req",req);
	// 	res.sendFile(path.join(__dirname, '../', 'public', 'build', 'index.html'));
	// });

	// app.get(/^.(?!websocket).*$/, (req, res) => {
	// 	res.sendFile(path.join(__dirname, '../', 'public', 'build', 'index.html'));
	// });

	

=======
	app.get('*', function(req, res) {
		res.sendFile(path.join(__dirname, '../', 'public', 'build', 'index.html'));
	});
>>>>>>> Stashed changes
};