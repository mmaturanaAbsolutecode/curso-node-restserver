const { Router } = require("express");
const {
  usersGet,
  usersDelete,
  usersPut,
  usersPost,
  usersPatch,
} = require("../controllers/users");

const router = Router();

router.get("/", usersGet);

router.delete("/", usersDelete);

router.put("/:id", usersPut);

router.post("/", usersPost);

router.patch("/", usersPatch);

module.exports = router;
