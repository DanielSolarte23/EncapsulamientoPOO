import mysql from 'mysql2'

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"CTPI2024**",
    database:"Colombia"
});

db.connect((e)=>{
    if(e){
        console.log("Error Fatal");
    }else{
        console.log("Conectado a Mysql");
    }
})

export default db;