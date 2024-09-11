import { Juego } from "../models/jugadores.model.js";

export const obtenerJuego = async (req, res) => {
    try {
        const juegos = await Juego.find(); // 
        res.json(juegos);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los departamentos" });
    }
};

export const agregarJuego = async (req, res) => {
    try {
        const { nombre, jugadores } = req.body;
        const nuevoJuego = new Juego({
            nombre,
            jugadores
        });
        const juegoGuardado = await nuevoJuego.save();
        res.status(201).json({
            message: "Juego creado exitosamente",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al crear el juego" });
    }
};



// //Actualizar Departamentos
// export const updateDpto = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { nombre, descripcion } = req.body;
//         if (!nombre || !descripcion) {
//             return res.status(400).json({ message: "Los campos 'nombre' o 'descripcion' están vacíos" });
//         }
//         let dptoActualizado = await Departamento.findByIdAndUpdate(
//             id, { nombre, descripcion }
//         );
//         if (!dptoActualizado) {
//             return res.status(404).json({ message: "Departamento no encontrado" });
//         }
//         res.json({ message: "Departamento Actualizado", dptoActualizado });
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({ message: "Error al actualizar el departamento" });
//     }
// };

// //Eliminar Departamentos
// export const deleteDpto = async (req, res) => {
//     const { id } = req.params
//     const dptoEliminado = await Departamento.findByIdAndDelete(id)
//     if (!id) {
//         return res.json({ message: "El departamento no existe" })
//     } else {
//         res.json({ message: "Departamento Eliminado", dptoEliminado })
//     }
// }


