const db = require('../config/config.js');

function traerEmpleados(callback){
    const consultaEmpleados = "SELECT * FROM empleados";
    db.query(consultaEmpleados, (err, results) => {
        if (err) {
            return console.log("Error Fatal");
        
        }else{
            callback(results);
        }
        
    });
}

const empleadosA = () => {
    const consultaEmpleadosA = "SELECT * FROM empleados WHERE nombre LIKE 'A%'";

    db.query(consultaEmpleadosA, (err, results) =>{
        if(err){
            throw new Error("Error faltal, consulta no realizada")
        }
    })
}

module.exports = {traerEmpleados, empleadosA};

