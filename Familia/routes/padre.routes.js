const express = require("express");
const router = express.Router();
const padreController = require("../controller/padre.controller");

router.post("/padres", padreController.crearPadre);
router.get("/padres", padreController.verPadre);
router.put("/padres/:id", padreController.actualizarPadre);
router.delete("/padres/:id", padreController.eliminarPadre);
module.exports = router;
