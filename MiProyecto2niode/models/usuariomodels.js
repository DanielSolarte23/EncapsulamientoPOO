const db = require('../config/db.js');

function traerUsuario(callback){
    const consultarUsuarios = "SELECT * FROM usuario";
    db.query(consultarUsuarios, (err, result) =>{
        if(err){
            console.log("Error Fatal");
        }else{
            callback(result);
        }
    });
};

function traerUsuarioA(callback){
    const consultaUsuariosA = "SELECT * FROM usuario WHERE nombreUsuario LIKE 'A%'"
    db.query(consultaUsuariosA, (err, result) =>{
        if(err){
            console.log("Error Fatal");
        }else{
            callback(result)
        }
    })
}

module.exports = {traerUsuario, traerUsuarioA}
