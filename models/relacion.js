const { DataTypes, sequelize }= require("../db.js") ;
const {User} = require("./user");
const {Post } = require("./post");
const {Comment} = require("./comment") ;
const app = require("../app");
const port = process.env.PORT

User.hasMany(Post, {as: "posts", foreignKey: "userId"})
Post.belongsTo(User, {as: "users", foreignKey: "userId"})

Post.hasMany(Comment, {as: "comments", foreignKey: "postId"})
Comment.belongsTo(Post, {as: "posts", foreignKey: "postId"})


sequelize.models = {
    User,
    Post,
    Comment
}

sequelize.sync({ force: false }).then(() => {
    console.log("Tablas de Usuario, Post, Comentarios creada");
    app.listen(port, () => console.log(`Server on http://localhost:${port}`));
});
module.exports = {
    User,
    Post,
    Comment,
};