module.exports = function(sequelize, DataTypes) {

  // !! Dummy Data Structure for Server Listener to Work
  // !! To be Deleted
  var Team = sequelize.define("Team", {
    name: DataTypes.STRING
  });

  return Team;
};