module.exports = function(sequelize, DataTypes) {

  var Skaters = sequelize.define("skaters", {

    team_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    skater_number: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { min: 1, max: 4}
    },
    skater_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { leng: [1] }
    },
    team_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { len: [1] }
    }
  });

  return Skaters;
};