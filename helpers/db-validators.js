const Rol = require("../models/rol");
const Usuario = require("../models/usuario");
const mongoose = require("mongoose");

const esRolValido = async (rol = "") => {
  const existeRol = await Rol.findOne({ rol });
  if (!existeRol) {
    throw new Error(`El rol ${rol} no está registrado en la base de datos`);
  }
};

const existeCorreo = async (correo = "") => {
  const existeC = await Usuario.findOne({ correo });
  if (existeC) {
    throw new Error(
      `El correo ${correo} ya está registrado en la base de datos`
    );
  }
};

const existeUsuarioPorId = async (id) => {
  if (mongoose.Types.ObjectId.isValid(id)) {
    const existId = await Usuario.findById(id);
    if (!existId) {
      throw new Error(`El id  ${id}  no existe en la BD`);
    }
  } else {
    throw new Error(`El id ${id} no es válido`);
  }
};

module.exports = {
  esRolValido,
  existeCorreo,
  existeUsuarioPorId,
};
