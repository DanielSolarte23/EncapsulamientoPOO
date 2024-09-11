import express from "express";
import departamentoRoutes from "./routes/departamento.routes.js";
import municipioRoutes from "./routes/municipio.routes.js";
import { conexionDB } from "./config/db.js";

// Conexión a la base de datos
conexionDB();

const app = express();
const puerto = 4004;

// Middleware para parsear JSON
app.use(express.json());

// Usar las rutas
app.use('/api/', departamentoRoutes); // Aquí usas todo el router de departamentos
app.use('/api/', municipioRoutes);       // Aquí usas todo el router de municipios

// Iniciar servidor
app.listen(puerto, () => {
    console.log(`Servidor corriendo en http://localhost:${puerto}`);
});
