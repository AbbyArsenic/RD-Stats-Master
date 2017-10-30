module.exports = function(sequelize, DataTypes) {

  // !! Dummy Data Structure for Server Listener to Work
  // !! To be Deleted
  var Player = sequelize.define("Player", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });

  return Player;
};