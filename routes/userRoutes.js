
// 
const express = ("express");

const {Router}= require("express");
const router= Router();
const {createUser}= require('../controllers/userController');


//crear usuario
router.post('/createUsers', createUser);

module.exports = router;
