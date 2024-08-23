const { traerUsuario, traerUsuarioA, agregarUsuario } = require('./models/usuariomodels.js')
const express = require("express");

const app = express();
const PORT = 4000;
app.use(express.json());

app.get('/usuario', (req, res) => {
    traerUsuario((results) => {
        res.json(results)
    });
    traerUsuarioA((results) => {
        res.json(results)
    })
});

app.post('/usuario', (req, res) => {
    let nuevoUsuario = req.body
    if ( !nuevoUsuario.contraseña || !nuevoUsuario.nombreUsuario) {
        res.send("Faltan Datos");
    }else{
        agregarUsuario(nuevoUsuario,(result) =>{
            res.json({mensaje: "Empleado agregado" })
        })
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo ${PORT}`);
})