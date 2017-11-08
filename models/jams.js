module.exports = function(sequelize, DataTypes) {

  var Jams = sequelize.define("jams", {
  
    jam_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    bout: {
      type: DataTypes.INTEGER,
      references: {
        model: 'bouts',
        key: 'bout_id'
      },
      allowNull: false,
    },
    team: {
      type: DataTypes.INTEGER,
      references: {
        model: 'teams',
        key: 'team_id'
      },
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
      validate: { min: 0, max: 50 }
    },
    jammer: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'skaters',
        key: 'skater_id'
      },
      validate: { min: 0 }
    },
    pivot: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'skaters',
        key: 'skater_id'
      },
      validate: { min: 0 }
    },
    blocker1: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'skaters',
        key: 'skater_id'
      },
      validate: { min: 0 }
    },
    blocker2: {
      type: DataTypes.INTEGER,
      references: {
        model: 'skaters',
        key: 'skater_id'
      },
      allowNull: true,
    },
    blocker3: {
      type: DataTypes.INTEGER,
      references: {
        model: 'skaters',
        key: 'skater_id'
      },
      allowNull: true,
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
