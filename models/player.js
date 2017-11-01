module.exports = function(sequelize, DataTypes) {

  // !! Dummy Data Structure for Server Listener to Work
  // !! To be Deleted
  var Player = sequelize.define("Player", {
    playerName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        leng: [1]
      }
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [1]
    },
    teamName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        leng: [1]
      }
    },
    teamID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [1]
    }
  });

  return Player;
};