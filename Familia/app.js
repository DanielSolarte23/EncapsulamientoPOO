const express = require('express');
const app = express();
 require ('dotenv').config();
const padreRoutes  = require('./routes/padre.routes'); 
const PORT = process.env.PORT 

app.use(express.json());
app.use('/api', padreRoutes);

app.listen(PORT, () => {
    console.log("Servidor corriendo");
});
