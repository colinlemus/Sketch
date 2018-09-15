var db = require('../models');

module.exports = app => {
	app.get('/api/userData', (req, res) => {
		db['userData'].findAll({}).then(dbUserData => {
			res.json(dbUserData);
		});
	});

	app.get('/api/login/:username/:password', (req, res) => {
		db['userData'].findOne({
			where: {
				username: req['params']['username'],
				password: req['params']['password']
			}
		}).then(dbUserData => {
			res.json(dbUserData);
		});
	});

	app.post('/api/userData', (req, res) => {
		console.log(req['body']);
		db['userData'].create({
            email: req['body']['email'],
            username: req['body']['username'],
			password: req['body']['password'],
			firstName: req['body']['firstName'],
			lastName: req['body']['lastName']
		}).then(dbUserData => {
			res.json(dbUserData);
		});
	});

	app.get('/api/userData/:id', (req, res) => {
		console.log(req.params);
		console.log(req.params.id);
		db['userData'].findOne({
			where: {
				id: req['params']['id']
			}
		}).then(dbUserData => {
			res.json(dbUserData);
		});
	});

	app.post('/api/forget/', (req, res) => {
		db['userData'].findOne({
			where: {
				username: req['body']['username']
			}
		}).then(dbUserData => {
			res.json(dbUserData);
		});
	});

	app.put('/api/forget/', (req, res) => {
		db['userData'].update(req['body'], {
			where: {
				id: req['body']['id']
			}
		}).then(dbUserData => {
			res.json(dbUserData);
		});
	});

	app.post('/api/login/', (req, res) => {
		db['userData'].findOne({
			where: {
				username: req['body']['username'],
				password: req['body']['password']
			}
		}).then(dbUserData => {
			res.json(dbUserData);
		});
	});

};