module.exports = function(sequelize, DataTypes) {
	var Word = sequelize.define('word', {
		chosenWord: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1,255],
			}
		}
	});
	
	return Word;
};