// Imports
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");


require("ejs");

// Se importa la instancia de conexión a la base de datos - (debe ser después de leer las variables de entorno)
const { sequelize } = require("./db");

// Conexión a base de datos
sequelize
  .authenticate()
  .then(() => console.log("Conexión a base de datos exitosa"))
  .catch((error) => console.log("Error al conectar a base de datos", error));



const app = express();
const port = process.env.PORT || 5000;


// TODO: Implementar middlewares
app.use(cors());
// app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// app.use(express.static(path.join(__dirname, "public")));


// ecuche el servidor 
app.listen(port, () => console.log(`Server on http://localhost:${port}`));