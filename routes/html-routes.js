var path = require('path');

module.exports = function(app) {
	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, '../', 'public', 'build', 'index.html'));
	});

	// app.get("/game-chat/.websocket/*", (req, res) => {
	// 	// res.sendFile(path.join(__dirname, '../', 'public', 'build', 'index.html'));
	// 	console.log("gamechat hit");
	// });

	// app.get('*', function(req, res) {
	// 	console.log("req",req);
	// 	res.sendFile(path.join(__dirname, '../', 'public', 'build', 'index.html'));
	// 	// if (req.url === '/' || req.url === '/login') return next();

	// });

	// app.use((req, res, next) => {
	// 	res.sendFile(path.join(__dirname, '../', 'public', 'build', 'index.html'));
	// });
};






// var URLexceptWS = function(URL) {
// 	if (URL.indexOf(".websocket") >= 0) {
// 		return 
// 	}
// }
