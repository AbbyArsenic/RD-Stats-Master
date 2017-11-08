module.exports = function(sequelize, DataTypes) {
  var Skaters = sequelize.define("skaters", {

    skater_id: {
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
      references: {
        model: 'teams',
        key: 'team_id'
      },
      allowNull: false,
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  });

  return Skaters;
};