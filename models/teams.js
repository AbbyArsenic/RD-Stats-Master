module.exports = function(sequelize, DataTypes) {
  var Teams = sequelize.define("teams", {
    
  	team_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    team_name: {
  	  type: DataTypes.STRING,
  	  allowNull: false,
  	  validate: {
  	    leng: [1]
  	  }
  	}
  },
  {
    timestamps: false,
    freezeTableName: true
  });

  return Teams;
};