import { crearDpto, obtenerDpto, updateDpto, deleteDpto } from "../controllers/departamento.controllers.js";

import express from 'express'
import { Router } from 'express'

const router = Router();

router.get('/departamentos', obtenerDpto)
router.post('/departamentos', crearDpto)
router.put('/departamentos/:id', updateDpto)
router.delete('/departamentos/:id', deleteDpto)

export default router
