import { obtenerMunicipio } from "../controllers/municipio.controllers.js";

import express from 'express'
import { Router } from 'express'

const router = Router();

router.get('/municipio', obtenerMunicipio)
// router.post('/departamentos', agregarDepartamentos)
// router.put('/departamentos/:id', actualizarDepartamentos)
// router.delete('/departamentos/:id', eliminarDepartamentos)

export default router
