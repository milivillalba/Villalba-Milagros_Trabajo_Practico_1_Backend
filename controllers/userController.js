 const userCtr = {};

const User  = require('../models/usuario');

userCtr.createUser = async (req, res) => {
  const {  username,email, password, } = req.body;

    try {
       //para verificar si el registro ya existe
    const existeUser = await User.findOne({
      where: {
        email,
      },
    });

    if (existeUser) {
      throw {
        status: 400,
        message: "El Usuario ya existe",
      };
    }
    const newUser = new User({
      username,
      email,
      password,
   
    });
    await newUser.save();

      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ error: 'Errror  al crear el usuario' });
    }
};

module.exports = userCtr;

