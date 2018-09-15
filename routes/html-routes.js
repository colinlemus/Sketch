<<<<<<< Updated upstream
var path = require('path');

module.exports = app => {
	app.get('/', (req, res) => {
		res.sendFile(path.join(__dirname, '../', 'public', 'build', 'index.html'));
	});

	app.get('*', (req, res) => {
=======
var db = require('../models');
var path = require('path');

module.exports = function(app) {
	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, '../', 'public', 'build', 'index.html'));
	});

	app.get('*', function(req, res) {
>>>>>>> Stashed changes
		res.sendFile(path.join(__dirname, '../', 'public', 'build', 'index.html'));
	});
};