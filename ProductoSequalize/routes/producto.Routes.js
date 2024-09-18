const express = require('express')
const router = express.Router();
const productoController = require('../controller/producto.controller')


// const app = express()
router.post('/productos', productoController.crearProducto)

module.exports= router

