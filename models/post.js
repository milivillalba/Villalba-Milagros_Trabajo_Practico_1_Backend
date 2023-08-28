const {DataTypes , sequelize }= require("../db");



const Post = sequelize.define('Post',
 {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT(500),
    allowNull: false
  },
  fecha_creacion: {
    type: DataTypes.DATEONLY,
    defaultValue: DataTypes.NOW
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
  },
  deletedAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
},

{ createdAt: true,
  updatedAt: true,
  deletedAt: true,
  tableName: "Post",
});



module.exports= Post;



// Relación uno a muchos con Comentarios
// Post.hasMany(Comment, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });
// Comment.belongsTo(Post);

// // Relación muchos a uno con Usuario (Autor del post)
// Post.belongsTo(User);

// Exportar el modelo

