import { obtenerJuego,agregarJuego } from "../controllers/jugadores.controller.js";

import express from 'express'
import { Router } from 'express'

const router = Router();

router.get('/juego' , obtenerJuego)
router.post('/juego',agregarJuego)
router.put('/juego/:id')
router.delete('/juego/:id')

export default router
