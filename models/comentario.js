
const {DataTypes, sequelize } = require("../db");


const Comment = sequelize.define('Comment',
 {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
    allowNull: false
  },
  text: {
    type: DataTypes.TEXT(500),
    allowNull: false
  },
  fecha_creacion: {
    type: DataTypes.DATEONLY,
    defaultValue: DataTypes.NOW,
  },
  
},
{
  tableName: "Comment",
});


module.exports= Comment;

// Relación muchos a uno con Post (donde se realizó el comentario)
// Comment.belongsTo(Post);





  