 const commentCtr = {};
const Comment  = require('../models/comentario');

  commentCtr.createComment= async (req, res) => {
    const {  text } = req.body;
    try {
      
      const newComment = new Comment({
          text
        });
      //SE ENVIA EL COMENTARIO A LA BASE DE DATOS 
      await newComment.save();

    //  if (!comentCreado) {
    //   throw {
    //     menssage: "error al crear el comentario ",
    //   };
    //  }
    return res.status(201).json({ message: "comentario creado con éxito" });
   
    } catch (error) {
      console.log("Error al crear el comentario", error);
      return res.status(500).json({ message: "Error al crear el comentario" });
    }
  }

module.exports = commentCtr;