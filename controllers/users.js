const { response } = require("express");

const usersGet = (req, res = response) => {
  const {q,nombre = 'no name', apikey} = req.query;
  res.json({
    msg: "get API - Controlador",
    q,
    nombre,
    apikey

  });
};

const usersPut = (req = request, res = response) => {
  const id = req.params.id;
  res.json({
    msg: "put API - Controlador",
    id,
  });
};

const usersPost = (req, res = response) => {
  const { nombre, edad } = req.body;
  res.json({
    msg: "post API - Controlador",
    nombre,
    edad,
  });
};

const usersDelete = (req, res = response) => {
  res.json({
    msg: "delete API - Controlador",
  });
};

const usersPatch = (req, res = response) => {
  res.json({
    msg: "patch API - Controlador",
  });
};

module.exports = {
  usersGet,
  usersPut,
  usersPost,
  usersDelete,
  usersPatch,
};
