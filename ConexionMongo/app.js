import express from "express"
import departamentoRoutes  from "./routes/departamento.routes.js";
import  municioRoutes  from "./routes/municipio.routes.js";
import { conexionDB } from "./config/db.js";

const app = express()
const puerto = 4004
app.use(express.json());
app.use('/api', departamentoRoutes.obtenerDepto);
app.use('/api', municioRoutes.obtenerMunicipio)


app.listen(puerto, () => {
    console.log(`Servidor corriendo en http://localhost:${puerto}`);
})