const {Router} = require("express");
const express = require('express');
const router = Router();
const {createComment} = require('../controllers/commentController');

//crear comentario
router.post('/createComments', createComment);


module.exports = router;
