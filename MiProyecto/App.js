const {traerEmpleados, empleadosA} = require('./models/empleadosModel.js');
const express = require('express');

const App = express();
const PORT = 3000;

App.get('/', (req, res) => {
    traerEmpleados((results)=>{
        res.json(results)
    })
    empleadosA((results)=>{
        res.json(results)
    })
});

App.listen(PORT, () => {
    console.log(`Servidor Corriendo en el puerto ${PORT}`);
});















// // import e from "express";

// const express = require('express');

// const App = express();

// const PORT = 3000;

// //METODO GET
// App.get('/', (req, res)=>{
//     res.send('Este es el metodo get');
// });

// //METODO POST
// App.post('/', (req, res)=>{
//     res.send('Este es el metodo Post')
// });

// //METODO PUT
// App.put('/empleado/:id', (req, res)=>{
//     let empleadoId = req.params.id

//     let updatedEmpleado = {
//         id: empleadoId,
//         nombre: "Cata", // Podrías obtener esto de req.body si estás actualizando datos
//         cargo: "Programador"
//     };
    
//     res.json({
//         message: "Empleado actualizado correctamente",
//         empleado: updatedEmpleado
//     });
// });

// //METODO DELETE
// App.delete('/', (req, res)=>{
//     res.send('Este es el metodo delete')
// });



// App.listen(PORT, () => {
//     console.log(`Servidor Corriendo ${PORT}`);
// });