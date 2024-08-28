const db = require ('../config/db.js');

function listaTareas (callback){
    const tareas = 'SELECT * FROM tareas'
    db.query(tareas, (err,result) =>{
        if(err){
            console.log(`Error al listar tareas ${err}`)
        }else{
            callback(result)
        }
    })
}

function contarTareas(callback){
    const numeroTareas = "SELECT COUNT(*) AS cantidad FROM tareas"
    db.query(numeroTareas, (err, result) =>{
        if(err){
            console.log(`Erro ${err}`);
        }else{
            callback(result)
        }
    })
}

function AgregarTarea (alumnoId, nuevaTarea, callback){
    const añadirTarea = 'INSERT INTO tareas(materia, hora, id_Alumno) VALUES(?,?,?)'
    db.query(añadirTarea, [nuevaTarea.materia , nuevaTarea.hora, alumnoId], (err, result) =>{
        if(err){
            console.log(`Error ${err}`);
        }else{
            callback(result)
        }
    })
}

function actualizarTarea(tareaId, nuevosDatosTarea, callback){
    const updateTarea = 'UPDATE tareas SET materia=?, hora =? WHERE idTarea =?';
    db.query(updateTarea, [nuevosDatosTarea.materia, nuevosDatosTarea.hora, tareaId], (err, result)=>{
        if(err){
            console.log(`error ${err}`);
        }else{
            callback(result)
        }
    })
}

function eliminarTarea(tareaId, callback){
    let elimineTarea = "DELETE FROM tareas WHERE idTarea=?"
    db.query(elimineTarea, [tareaId], (err, result) =>{
        if(err){
            console.log(`Error fatal ${err}`);
        }else{
            callback(result)
        }
    });
};

module.exports = { AgregarTarea, listaTareas, actualizarTarea, eliminarTarea, contarTareas }