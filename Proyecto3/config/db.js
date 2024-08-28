const mysql = require('mysql2');
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"CTPI2024**",
    database:"colegio_db"
});

db.connect((e)=>{
    if(e){
        console.log("Error Fatal");
    }else{
        console.log("Conectado a Mysql");
    }
})

module.exports = db;