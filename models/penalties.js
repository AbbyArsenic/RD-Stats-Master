module.exports = function(sequelize, DataTypes) {

  var Penalties = sequelize.define("penalties", {
    
    penalty_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    bout_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    jam_number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    skater_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    penalty: {
      type: DataTypes.STRING,
    }
  });
  
  return Penalties;
};
