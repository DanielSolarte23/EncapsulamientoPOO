const mysql = require('mysql2');
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"CTPI2024**",
    database:"empleados_db"
});

db.connect((e)=>{
    if(e){
        console.log("Error Fatal");
    }else{
        console.log("conectado a mysql");
    }
})

module.exports = db;