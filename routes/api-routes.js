var db = require('../models');

module.exports = app => {
	app.get('/api/login', (req, res) => {
		db['userData'].findAll({}).then(dbUserData => {
			res.json(dbUserData);
		});
	});

	app.post('/api/userData', (req, res) => {
		db['userData'].create({
            email: req['body']['email'],
            username: req['body']['username'],
			password: req['body']['password']
		}).then(dbUserData => {
			res.json(dbUserData);
		});
	});

	app.get('/api/userData/:id', (req, res) => {
		db['userData'].findOne({
			where: {
				id: req['params']['id']
			}
		}).then(dbUserData => {
			res.json(dbUserData);
		});
	});

	app.put('/api/userData', (req, res) => {
		db['userData'].update(req['body'], {
			where: {
				id: req['body']['id']
			}
		}).then(dbUserData => {
			res.json(dbUserData);
		});
	});
};