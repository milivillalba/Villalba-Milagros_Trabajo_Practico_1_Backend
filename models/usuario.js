const {DataTypes, sequelize } =require("../db") ;
// const userCtr = require("../controllers/userController")



const User = sequelize.define('User',
 {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
    allowNull: false
  }, 

  username: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  email: {
    type :DataTypes.STRING (50),
    allowNull: false
  },

  password: {
    type: DataTypes.STRING(50),
    allowNull: false
  }

},
{
 tableName: "User",
});


module.exports = User;
