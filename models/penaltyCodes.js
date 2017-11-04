module.exports = function(sequelize, DataTypes) {

  var Penaltycodes = sequelize.define("penalty_codes", {
    
    penaltycode_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    penalty_code: {
      type: DataTypes.STRING,
      allowNull: false
    },
    penalty_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  });
  
  return Penaltycodes;
};
