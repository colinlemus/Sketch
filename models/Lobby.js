module.exports = function(sequelize, DataTypes) {
	var user = sequelize.define('user', {
		onlineUser: {
			type: DataTypes.STRING,
		}
		// userScore: {
		// 	type: DataTypes.STRING
		// }
	});
	
	return user;
};