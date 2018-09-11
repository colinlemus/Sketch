module.exports = function(sequelize, DataTypes) {
	var UserData = sequelize.define("userData", {
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [7,255],
				isEmail: true,
				notNull: false
			}
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1,10],
				notNull: false
			}
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [6,255],
				notNull: false
			}
		},
	});
	return UserData;
};