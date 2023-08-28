// const {Router} = require("express");
const express = require("express")
const router = express.Router();
const {getPosts,getPostById,createPost,updatePost,deletePost} = require('../controllers/postController');

// Rutas para CRUD de reservas

//obtener todos los POSTS
router.get("/posts", getPosts);

//obtener un solo POST por su ID
router.get('/post/:id', getPostById)

//crear POST
router.post('/createPosts', createPost);

//actualizar POST
router.put('/updatePosts/:id', updatePost);

//eliminar POST
router.delete("/deletePosts/:id", deletePost);





module.exports = router
