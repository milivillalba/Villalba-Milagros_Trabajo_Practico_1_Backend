const PostrCtr = {};
const Post = require('../models/post');
const bcrypt = require("bcrypt");


  PostrCtr.createPost = async (req, res) => {
    const {  title, content  } = req.body;
    try {
        // const existePost = await Post.findOne({
        //     where: {
        //       email,
        //     },
        // });
        // if(existePost){
        //     throw {
        //         status: 400,
        //         message: "El POST ya existe",
        //     };
        // }

      const newPost = new Post({
        title,
        content,
        
      });
     
    //guardar usuario en la base de datos

    const postCreado = await newPost.save();

    if (!postCreado) {
      throw {
        menssage: "error al crear el post ",
      };
    }
    return res.status(201).json({
        message: "POST creado exitosamente",
    });

    
    }catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
          message: error.message || "error al creer POST",
        });
    }
  };
  //trae todos los POST
  PostrCtr.getPosts = async (req, res) => {
    try {
      const posts = await Post.findAll({
        include: User, // Incluye los datos del usuario asociado a la publicación
        order: [['createdAt', 'DESC']] // Ordena las publicaciones por fecha de creación descendente
      });
      if (!usuarios) {
        throw {
          status: 404,
          message: "No se encontraron los registros",
        };
      }
      res.status(200).json(posts);
    } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
          message: error.message || "Error al obtener los Post",
        });
      }
  };

  //TRae un solo POST osea una sola publicacion

  PostrCtr.getPostById = async (req, res) => {
    try {
      const postId = req.params.id;
      const post = await Post.findByPk(postId, {
        include: User // Incluye los datos del usuario asociado a la publicación
      });
      if (!post) {
        return res.status(404).json({ error: 'No se encontro el posts' });
      }
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ error: 'Error al recuperar el posts' });
    }
  }


  //EDITAR POST
  PostrCtr.updatePost = async (req, res) => {
    try {
      const postId = req.params.id;
      const { title, content , fecha_creacion } = req.body;

      const post = await Post.findByPk(postId);
      if (!post) {
        return res.status(404).json({ error: 'Post no Encontrado' });
      }

      await post.update({ title, content , fecha_creacion  });
      res.status(200).json({
        message: 'Post editado correctamente',
        updatedPost})

    } catch (error) {
      res.status(500).json({ error: 'Error al Editar el  post' });
    }
  }

  //ELIMINAR POST
  PostrCtr.deletePost = async (req, res) => {
    try {
      const postId = req.params.id;
      const post = await Post.findByPk(postId);
      if (!post) {
        return res.status(404).json({ error: 'Post not encontrado' });
      }

      await post.destroy();
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Error al Eliminar el  post' });
    }
};


module.exports = PostrCtr;