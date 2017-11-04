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
      unique: true,
      validate: { min: 4, max: 15 }
    },
    referee_email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    referee_password: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      validate: { min: 8, max: 100 }
    },
  });

  return Referee;
};