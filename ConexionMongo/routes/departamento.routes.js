import { DptoC } from "../controllers/departamento.controllers.js";

import express from 'express'
import { Router } from 'express'

const router = Router();

router.get('/departamentos', DptoC.obtenerDpto)
router.post('/departamentos', DptoC.crearDpt)
// router.put('/departamentos/:id', actualizarDepartamentos)
// router.delete('/departamentos/:id', eliminarDepartamentos)

export default router
