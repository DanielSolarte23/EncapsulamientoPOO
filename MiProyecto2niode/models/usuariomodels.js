const db = require('../config/db.js');

function traerUsuario(callback) {
    const consultarUsuarios = "SELECT * FROM usuario";
    db.query(consultarUsuarios, (err, result) => {
        if (err) {
            console.log("Error Fatal");
        } else {
            callback(result);
        };
    });
};

function traerUsuarioA(callback) {
    const consultaUsuariosA = "SELECT * FROM usuario WHERE nombreUsuario LIKE 'A%'"
    db.query(consultaUsuariosA, (err, result) => {
        if (err) {
            console.log("Error Fatal");
        } else {
            callback(result)
        };
    });
};

function agregarUsuario(nuevoUsuario, callback) {
    let iUsuario = "INSERT INTO usuario (constraseña, nombreUsuario) VALUES(?, ?)";
    db.query(iUsuario, [nuevoUsuario.constraseña, nuevoUsuario.nombreUsuario], (err, result) => {
        if (err) {
            console.log("inserción no realizada");
        } else {
            callback(result);
        }
    });
};

module.exports = { traerUsuario, traerUsuarioA, agregarUsuario }
