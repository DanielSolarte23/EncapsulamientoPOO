import { obtenerMunicipio, crearMunicipio, updateMunicipio, deleteMunicipio } from "../controllers/municipio.controllers.js";

import express from 'express'
import { Router } from 'express'

const router = Router();

router.get('/municipio', obtenerMunicipio)
router.post('/municipio', crearMunicipio)
router.put('/municipio/:id', updateMunicipio)
router.delete('/municipio/:id', deleteMunicipio)

export default router
