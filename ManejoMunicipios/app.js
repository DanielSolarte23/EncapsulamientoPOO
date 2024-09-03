import express from "express"
import  departementoRoutes  from "./routes/departamento.routes.js"
import  municipioRoutes  from "./routes/municipio.routes.js"
import db from "./config/db.js"

const app = express()
const puerto = 3020
app.use(express.json());
app.use('/api', departementoRoutes)
app.use('/api', municipioRoutes)


app.listen(puerto, () => {
    console.log(`Servidor corriendo en http://localhost:${puerto}`);
})