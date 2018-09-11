var db = require('../models');

module.exports = app => {
	app.get('/api/login', (req, res) => {
		db['login'].findAll({}).then(dbLogin => {
			res.json(dbLogin);
		});
	});

	app.post('/api/login', (req, res) => {
		db['login'].create({
            email: req['body']['email'],
            username: req['body']['username'],
			password: req['body']['password']
		}).then(dbLogin => {
			res.json(dbLogin);
		});
	});

	app.get('/api/login/:id', (req, res) => {
		db['login'].findOne({
			where: {
				id: req['params']['id']
			}
		}).then(dbLogin => {
			res.json(dbLogin);
		});
	});

	app.put('/api/login', (req, res) => {
		db['login'].update(req['body'], {
			where: {
				id: req['body']['id']
			}
		}).then(dbLogin => {
			res.json(dbLogin);
		});
	});
};