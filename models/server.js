const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usersPath = "/api/user";

    //Middlewares
    this.middlewares();

    //Lectura y parseo del body
    this.app.use(express.json());


    //Rutas de la app
    this.routes();
  }

  middlewares() {
    //Cors
    this.app.use(cors());
    //Directorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usersPath, require("../routes/users"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor Corriendo en puerto : ", this.port);
    });
  }
}

module.exports = Server;