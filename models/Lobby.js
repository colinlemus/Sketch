module.exports = function(sequelize, DataTypes) {
	var user = sequelize.define('user', {
		onlineUser: {
			type: DataTypes.STRING,
			allowNull: DataTypes.STRING,
		}
	});
	
	return user;
};