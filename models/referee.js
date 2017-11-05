module.exports = function(sequelize, DataTypes) {

  var Referee = sequelize.define("referee", {
    referee_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    referee_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    referee_email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    referee_password: {
      type: DataTypes.STRING.BINARY,
      allowNull: false
    },
  });

  return Referee;
};