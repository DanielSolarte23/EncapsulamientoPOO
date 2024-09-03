import { obtenerMunicipios, agregarMunicipio, actualizarMunicipios, eliminarMunicipio } from '../controller/municipi.controller.js';

import express from 'express'

import { Router } from 'express'

const router = Router();

router.get('/municipios', obtenerMunicipios)
router.post('/municipios', agregarMunicipio)
router.put('/municipios/:id', actualizarMunicipios)
router.delete('/municipios/:id', eliminarMunicipio)

export default router