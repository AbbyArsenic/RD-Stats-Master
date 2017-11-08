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
      references: {
        model: 'bouts',
        key: 'bout_id'
      },
      allowNull: false
    },
    jam_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'jams',
        key: 'jam_id'
      },
      allowNull: false
    },
    skater_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'skaters',
        key: 'skater_id'
      },
      allowNull: false
    },
    penalty: {
      type: DataTypes.INTEGER,
      references: {
        model: 'penalty_codes',
        key: 'penaltycode_id'
      },
      allowNull: false
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  });
  
  return Penalties;
};
