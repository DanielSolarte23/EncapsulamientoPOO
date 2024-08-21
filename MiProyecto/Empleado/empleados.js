const express = require('express');

const empleado = express()

const PORT = 4000;

empleado.get('/', (req, res) => {
    res.send("este es el metodo get empleado");
})

empleado.listen(PORT, () => {
    console.log(`Servidor Corriendo ${PORT}`);
});