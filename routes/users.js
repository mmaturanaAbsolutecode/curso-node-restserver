const { Router } = require("express");
const { check } = require("express-validator");

const {
  esRolValido,
  existeCorreo,
  existeUsuarioPorId,
} = require("../helpers/db-validators");

// const { validarCampos } = require("../middlewares/validar-campos");
// const { validarJWT } = require("../middlewares/validar-jwt");
// const { esAdminRole } = require("../middlewares/validar-roles");
// const { tieneRole } = require("../middlewares/validar-roles");

const {
  validarCampos,
  validarJWT,
  esAdminRole,
  tieneRole,
} = require("../middlewares");

const {
  usersGet,
  usersDelete,
  usersPut,
  usersPost,
  usersPatch,
} = require("../controllers/users");

const router = Router();
////////////////////////////////////////////////
router.get("/", usersGet);

////////////////////////////////////////////////
router.put(
  "/:id",
  [
    check("id", "No es un ID valido").isMongoId(),
    check("id").custom(existeUsuarioPorId),
    check("rol").custom(esRolValido),
    validarCampos,
  ],
  usersPut
);
///////////////////////////////////////////////
router.post(
  "/",
  [
    check("nombre", "El nombre es oblogatorio").not().isEmpty(),
    check("password", "El password debe tener más de 6 caracteres").isLength({
      min: 6,
    }),
    check("correo", "El correo no es valido").isEmail(),
    check("correo").custom(existeCorreo),
    //check("rol", "No es un Rol válido").isIn(["ADMIN_ROLE", "USER_ROLE"]),
    check("rol").custom(esRolValido),
    validarCampos,
  ],
  usersPost
);

////////////////////////////////////////////////
router.delete(
  "/:id",
  [
    validarJWT,
    esAdminRole,
    tieneRole("ADMIN_ROLE", "VENTAS_ROLE"),
    check("id", "No es un ID valido").isMongoId(),
    check("id").custom(existeUsuarioPorId),
    validarCampos,
  ],
  usersDelete
);
////////////////////////////////////////////////

router.patch("/", usersPatch);

module.exports = router;
