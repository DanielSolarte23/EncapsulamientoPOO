import mongoose from "mongoose";
import { Juego } from "../models/jugadores.model.js";

export const obtenerJuego = async (req, res) => {
    try {
        const juegos = await Juego.find(); // 
        res.json(juegos);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al obtener los departamentos" });
    }
};

export const agregarJuego = async (req, res) => {
    try {
        const { nombre, jugadores } = req.body;
        const nuevoJuego = new Juego({
            nombre,
            jugadores
        });
        await nuevoJuego.save();
        res.status(201).json({
            mensaje: "Juego creado exitosamente",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: "Error al crear el juego" });
    }
};



//Actualizar Juegos
export const updateJuego = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, jugadores } = req.body;
        if (!nombre || !jugadores) {
            return res.status(400).json({ mensaje: "Los campos 'nombre' o 'jugadores' están vacíos" });
        }
        await Juego.findByIdAndUpdate(
            id, { nombre, jugadores }
        );
        if (!juegoActualizado) {
            return res.status(404).json({ mensaje: "Juego no encontrado" });
        }
        res.json({ mensaje: "Juego Actualizado" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensaje: "Error al actualizar el Juego" });
    }
};

//Eliminar Juego
export const deleteJuego = async (req, res) => {
    try {
        const { id } = req.params
        await Juego.findByIdAndDelete(id)
        if (!id) {
            return res.status(400).json({ Mensaje: "El Juego no existe" })
        } else {
            res.json({ Mensaje: "Juego Eliminado" })
        }
    } catch (error) {
        console.log(error);
    }
}

// export const contarPuntajes = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const juego = await Juego.findById(id);
//         if (!juego) {
//             return res.status(404).json({ Mensaje: "El juego no se encontró" });
//         }
//         const puntajeTotal = juego.jugadores.reduce((total, jugador) => total + jugador.puntaje, 0);

//         res.json({ nombre: juego.nombre, puntajeTotal });

//     } catch (error) {
//         console.error('Error al contar los puntajes:', error);
//     }
// }

// export const contarPuntajes = async (req, res) => {
//     let { id } = req.params;
//     try {
//         let resultado = await Juego.aggregate([
//             { $match: { _id: new mongoose.Types.ObjectId(id) } },
//             { $unwind: "$jugadores" }, 
//             { $group: { _id: "$_id", totalPuntaje: { $sum: "$jugadores.puntaje" } } } 
//         ]);
//         console.log(resultado);
//         res.status(200).json(resultado);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ error: "Error al contar los puntajes" });
//     }
// };

export const contarPuntajes = async (req, res) => {
    const { id } = req.params;
    try {
        const juego = await Juego.findById(id);
        if (!juego) {
            return res.status(404).json({ Mensaje: "El juego no se encontró" });
        }
        const puntajeTotal = juego.jugadores.reduce((total, jugador) => total + jugador.puntaje, 0);

        res.json({ nombre: juego.nombre, puntajeTotal });

    } catch (error) {
        console.error('Error al contar los puntajes:', error);
    }
}
