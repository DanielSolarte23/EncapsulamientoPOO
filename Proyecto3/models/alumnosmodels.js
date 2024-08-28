const db = require('../config/db.js')

function traerAlumnos(callback) {
    const consultarAlumnos = "SELECT * FROM alumnos";
    db.query(consultarAlumnos, (err, result) => {
        if (err) {
            console.log("Error Fatal");
        } else {
            callback(result);
        };
    });
};

function contarAlumnos(callback){
    const contarAlumnos = "SELECT COUNT(*) AS cantidad FROM alumnos"
    db.query(contarAlumnos, (err, result) =>{
        if(err){
            console.log(`Erro ${err}`);
        }else{
            callback(result)
        }
    })
}

function agregarAlumno(nuevoAlumno, callback){
    let AddAlumno = "INSERT INTO alumnos (nombreAlumno, apellidoAlumno, edadAlumno, telefonoAlumno) VALUES(?,?,?,?)";
    db.query(AddAlumno, [nuevoAlumno.nombreAlumno, nuevoAlumno.apellidoAlumno, nuevoAlumno.edadAlumno, nuevoAlumno.telefonoAlumno], (err, result) =>{
        if(err){
            console.log("no se pudo añadir el alumno");
        }else{
            callback(result)
        }
    })
}



function actualizarAlumno(alumnoId,nuevoDatosAlumno, callback){
    let AUsuario = "UPDATE alumnos SET nombreAlumno=?, apellidoAlumno=?, edadAlumno=?, telefonoAlumno=? WHERE idAlumno=?"
    db.query(AUsuario, [nuevoDatosAlumno.nombreAlumno, nuevoDatosAlumno.apellidoAlumno, nuevoDatosAlumno.edadAlumno, nuevoDatosAlumno.telefonoAlumno, alumnoId], (err, result)=>{
        if(err){
            console.log(`error ${err}`);
        }else{
            callback(result)
        }
    })
}

function eliminarAlumno(alumnoId, callback){
    let ChaoAlumno = "DELETE FROM alumnos WHERE idAlumno =?"
    db.query(ChaoAlumno, [alumnoId], (err, result) =>{
        if(err){
            console.log(`Error fatal ${err}`);
        }else{ 
            callback(result)
        }
    });
};

module.exports = { traerAlumnos, agregarAlumno, actualizarAlumno, eliminarAlumno, contarAlumnos }