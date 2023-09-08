// Imports
require("dotenv").config;
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const path = require("path");
const fs = require("fs");

const app = express();

const port = process.env.PORT || 5000;

// Se importa la instancia de conexión a la base de datos - (debe ser después de leer las variables de entorno)
const { sequelize } = require("./db");

// Conexión a base de datos
sequelize
  .authenticate()
  .then(() => console.log("Conexión a base de datos exitosa"))
  .catch((error) => console.log("Error al conectar a base de datos", error));

// TODO: Implementar middlewares
//
app.use(cors());
// app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

//directorio donde se almacenan los archivos de registros
const logDirectory = path.join(__dirname, "logs");

//asegurate de que el directorio de registros exista
if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory);
}
console.log(path.join(logDirectory, "access.log"));

//creare un stream de escritura para el archivo de registro
const accessLogStream = fs.createWriteStream(
  path.join(logDirectory, "access.log"),
  {
    flags: "a",
  }
);
//configurar morgan para utilizar el stream de escritura y el formato de registro deseado
app.use(morgan("combined", { stream: accessLogStream }));

//rutas

app.use("/", require("./routes/userRoutes"));
app.use("/", require("./routes/postRoutes.js"));
app.use("/", require("./routes/commentRoutes.js"));

app.use((req, res, next) => {
  return res.status(404).render("404");
});

module.exports = app;
