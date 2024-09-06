import { obtenerDpto } from "../controllers/departamento.controllers.js";

import express from 'express'
import { Router } from 'express'

const router = Router();

router.get('/departamentos', obtenerDpto)
// router.post('/departamentos', agregarDepartamentos)
// router.put('/departamentos/:id', actualizarDepartamentos)
// router.delete('/departamentos/:id', eliminarDepartamentos)

export default router
