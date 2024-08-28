const express = require("express")
const { traerAlumnos, agregarAlumno, actualizarAlumno, eliminarAlumno, contarAlumnos } = require('./models/alumnosmodels.js')
const { AgregarTarea, listaTareas, actualizarTarea, eliminarTarea, contarTareas } = require('./models/tareasmodels.js')

const app = express();
const puerto = 3500;
app.use(express.json());

app.get('/alumnos', (req, res) => {
    traerAlumnos((results) => {
        res.json(results)
    });
});

app.get('/Acuenta', (req, res) => {
    contarAlumnos((results) => {
        res.json(results)
    })
})

app.post('/alumnos', (req, res) => {
    let nuevoAlumno = req.body
    if (!nuevoAlumno.nombreAlumno || !nuevoAlumno.apellidoAlumno || !nuevoAlumno.edadAlumno || !nuevoAlumno.telefonoAlumno) {
        res.send("Faltan Datos")
    } else {
        agregarAlumno(nuevoAlumno, (result) => {
            res.json({ mensaje: "Alumno agregado Exitosamente!" })
        })
    }
})

app.put('/alumnos/:id', (req, res) => {
    let alumnoId = req.params.id;
    const nuevoDatosAlumno = req.body
    actualizarAlumno(alumnoId, nuevoDatosAlumno, (err, result) => {
        if (!err) {
            res.send(`Errores ${err}`)
        } else {

            res.json({ message: "Usuario actualizado con exito" })
        }
    });
});

app.delete('/alumnos/:id', (req, res) => {
    let alumnoId = req.params.id;
    eliminarAlumno(alumnoId, (err, result) => {
        if (!err) {
            res.send(`Error al eliminar el empleado ${err}`)
        } else {
            res.json({ mensaje: "Eliminado correctamente" })
        }
    })
})

//TAREAS---->

app.get('/tarea', (req,res) =>{
    listaTareas((result)=>{
        res.json(result)
    })
})

app.get('/tarea/count', (req,res)=>{
    contarTareas((result)=>{
        res.json(result)
    })
})

app.post('/tarea/:id', (req, res) => {
    const alumnoId = req.params.id;
    const nuevaTarea = req.body

    AgregarTarea(alumnoId, nuevaTarea, (err, result) =>{
        if (!err) {
            res.send(`Errores ${err}`)
        } else {

            res.json({ mensaje: "Tarea agregada con exito" })
        }
    })
})

app.put('/tarea/:id', (req, res) =>{
    let tareaId = req.params.id;
    const nuevosDatosTarea = req.body
    actualizarTarea(tareaId, nuevosDatosTarea, (err, result) =>{
        if(!err) {
            res.send(`Error al actualizar la tares ${err}`)
        }else{
            res.json({mensaje: "Tarea actualizada"})
        }
    })
})

app.delete('/tarea/:id', (req,res)=>{
    let tareaId = req.params.id;
    eliminarTarea(tareaId, (err, result)=>{
        if (!err) {
            res.send(`Error al eliminar la tarea ${err}`)
        } else {
            res.json({ mensaje: "Tarea eliminado correctamente" })
        }
    })
})

app.listen(puerto, () => {
    console.log(`Servidor corriendo en http://localhost:${puerto}`);

})