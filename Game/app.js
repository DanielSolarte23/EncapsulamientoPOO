import express from 'express';
import connectDB from './config/db.js'; 
import Dotenv  from 'dotenv';
import juegoRoutes from './router/jugadores.routes.js'

Dotenv.config()

connectDB();

const app = express();

app.use(express.json())

app.use('/api', juegoRoutes)
// app.use('/api')

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
