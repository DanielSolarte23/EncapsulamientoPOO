import { Departamento } from "../models/departamento.models.js";

// Obtener departamentos
export const obtenerDpto = async (req, res) => {
    try {
        const departamentos = await Departamento.find(); // 
        res.json(departamentos);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los departamentos" });
    }
};

// Crear un nuevo departamento
export const crearDpto = async (req, res) => {
    try {
        const { nombre } = req.body;
        const nuevoDato = new Departamento({ nombre });
        await nuevoDato.save(); // Guardamos el nuevo departamento
        res.json({ message: "Departamento creado", departamento: nuevoDato });
    } catch (error) {
        res.status(500).json({ message: "Error al ingresar depto" });
    }
};

//Actualizar Departamentos
export const updateDpto = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, descripcion } = req.body;
        if (!nombre || !descripcion) {
            return res.status(400).json({ message: "Los campos 'nombre' o 'descripcion' están vacíos" });
        }
        let dptoActualizado = await Departamento.findByIdAndUpdate(
            id, { nombre, descripcion }
        );
        if (!dptoActualizado) {
            return res.status(404).json({ message: "Departamento no encontrado" });
        }
        res.json({ message: "Departamento Actualizado", dptoActualizado });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error al actualizar el departamento" });
    }
};

//Eliminar Departamentos
export const deleteDpto = async (req, res) => {
    const { id } = req.params
    const dptoEliminado = await Departamento.findByIdAndDelete(id)
    if (!id) {
        return res.json({ message: "El departamento no existe" })
    } else {
        res.json({ message: "Departamento Eliminado", dptoEliminado })
    }
}


