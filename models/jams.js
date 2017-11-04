module.exports = function(sequelize, DataTypes) {

  var Jams = sequelize.define("jams", {
  
    jam_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    bout_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    team_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    jam_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { min: 0, max: 75 },
    },
    points: {
      type: DataTypes.INTEGER,
      allowNull: false,
      default: 0,
      validate: { min: 0 }
    },
    jammer: {
      type: DataTypes.INTEGER,
      allowNull: true,
      // Should these positions be made as Foreign Keys?
      // references: {
      //   model: ,
      //   key: 
      // },
      validate: { min: 0 }
    },
    pivot: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { min: 0 }
    },
    blocker1: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { min: 0 }
    },
    blocker2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: { min: 0 }
    },
    blocker3: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: { min: 0 }
    },
    star_pass: {
      type: DataTypes.BOOLEAN,
      // allowNull: false,
      default: 0
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  });
  
  return Jams;
};
