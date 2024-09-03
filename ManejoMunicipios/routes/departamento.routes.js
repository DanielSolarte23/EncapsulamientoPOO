import { obtenerDepartamentos, actualizarDepartamentos, agregarDepartamentos, eliminarDepartamentos } from "../controller/departamento.controller.js";

import express from 'express'
import { Router } from 'express'

const router = Router();

router.get('/departamentos', obtenerDepartamentos)
router.post('/departamentos', agregarDepartamentos)
router.put('/departamentos/:id', actualizarDepartamentos)
router.delete('/departamentos/:id', eliminarDepartamentos)

export default router
