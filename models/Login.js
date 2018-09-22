module.exports = function(sequelize, DataTypes) {
	var UserData = sequelize.define('userData', {
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [7,255],
				isEmail: true,
			}
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1,10],
			}
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [6,255],
			}
		},
		firstName: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1,255],
			}
		},
		lastName: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1,255],
			}
		},
	});
	
	return UserData;
};