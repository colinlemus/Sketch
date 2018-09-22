module.exports = function(sequelize, DataTypes) {
	var user = sequelize.define('user', {
		onlineUser: {
			type: DataTypes.STRING,
		},
		score: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: 0,
			validate: {
				len: [1,6]
			}
		}
	});
	
	return user;
};