module.exports = function(sequelize, DataTypes) {

  // !! Dummy Data Structure for Server Listener to Work
  // !! To be Deleted
  var Team = sequelize.define("Team", {
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

  return Team;
};