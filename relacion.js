const { DataTypes, sequelize } = require("./db.js");
const User = require("./models/usuario.js");
const Post = require("./models/post.js");
const Comment = require("./models/comentario.js");
const app = require("./app.js")
require("dotenv").config()
const port = process.env.PORT;

User.hasMany(Post, { foreignKey: "userId", as: "posts" });
Post.belongsTo(User, { foreignKey: "userId", as: "user" });

Post.hasMany(Comment, { foreignKey: "postId", as: "comments" });
Comment.belongsTo(Post, { foreignKey: "postId", as: "post" });

sequelize.models = {
  User,
  Post,
  Comment,
};
//
sequelize.sync({ force: false }).then(() => {
  console.log("Tablas de Usuario, Post, Comentarios creadas");
  app.listen(port, () => {
    console.log(`Servidor en ejecución en http://localhost:${port}`);
  });
});

module.exports = {
  User,
  Post,
  Comment,
};
