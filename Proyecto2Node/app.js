const { traerUsuario, traerUsuarioA, agregarUsuario, eliminarUsuario, actualizarUsuario  } = require('./models/usuariomodels.js')
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

app.put('/usuario/:id', (req,res)=>{
    let usuarioId = req.params.id;
    const nuevoDatosUsuario = req.body
    actualizarUsuario (usuarioId, nuevoDatosUsuario,(err, result)=>{
        if(!err){
            res.send(`Errores ${err}`)
        }else{
            res.json({message:"Usuario actualizado con exito"})
        }
    });
});  

app.delete('/usuario/:id', (req,res) =>{
    let usuarioId = req.params.id;
    eliminarUsuario(usuarioId, (err, result) =>{
        if(err){
            res.send("Error al eliminar el empleado");    
        }else{
            return res.json({message:"Eliminado correctamente"})
        }
    })
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo ${PORT}`);
})