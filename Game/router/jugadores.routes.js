import { obtenerJuego,agregarJuego, updateJuego, deleteJuego, contarPuntajes } from "../controllers/jugadores.controller.js";

import express from 'express'
import { Router } from 'express'

const router = Router();

router.get('/juego' , obtenerJuego)
router.post('/juego',agregarJuego)
router.put('/juego/:id',updateJuego)
router.delete('/juego/:id', deleteJuego)
router.get('/juego/:id', contarPuntajes)

export default router
