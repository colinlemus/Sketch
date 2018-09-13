var path = require('path');

module.exports = app => {
	app.get('/', (req, res) => {
		res.sendFile(path.join(__dirname, '../', 'public', 'build', 'index.html'));
	});

	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, '../', 'public', 'build', 'index.html'));
	});
};