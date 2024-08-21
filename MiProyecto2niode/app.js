const { traerUsuario, traerUsuarioA } = require('./models/usuariomodels.js')
const express = require("express");

const app = express();
const PORT = 3000;

app.get('/', (req, res)=>{
    traerUsuario((results) =>{
        res.json(results)
    });
    traerUsuarioA((results) =>{
        res.json(results)
    })
});

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo ${PORT}`);
})