const express = require("express");
const app = express();
const productoRoutes = require("./routes/producto.Routes");
const dotenv = require('dotenv');

// Cargar variables de entorno
dotenv.config();
const PORT = process.env.PORT;  

app.use(express.json());

// Usar las rutas
app.use("/api", productoRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
