import { Municipio } from "../models/municipio.models.js";

//Obtener Municipios
export const obtenerMunicipio = async (req, res) => {
    try {
        const municipios = await Municipio.find()
        res.json(municipios)
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los municipios" })
    }
}

//Crear Municipios
export const crearMunicipio = async (req, res) => {
    try {
        const { nombre } = req.body;
        const nuevoDato = new Municipio({ nombre });
        await nuevoDato.save(); //Para Guardar el Municipio En la BDD
        res.json({ message: "Municipio creado", Municipio: nuevoDato });
    } catch (error) {
        res.status(500).json({ message: "Error al ingresar Municipio" });
    }
};

//Actualizar Municipio
export const updateMunicipio = async (req, res) => {
    try {
        const { id } = req.params; 
        const { nombre, descripcion } = req.body;
        if (!nombre || !descripcion) {
            return res.status(400).json({ message: "Los campos 'nombre' o 'descripcion' están vacíos" });
        }
        let municipioActualizado = await Municipio.findByIdAndUpdate(
            id, { nombre, descripcion }
        );
        if (!municipioActualizado) {
            return res.status(404).json({ message: "Municipio no encontrado" });
        }

        res.json({ message: "Municipio Actualizado", municipioActualizado });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error al actualizar el Municipio" });
    }
};

//Eliminar Municipio
export const deleteMunicipio = async (req, res) => {
    const { id } = req.params
    const municipioActualizado = await Municipio.findByIdAndDelete(id)
    if (!id) {
        return res.json({ message: "El municipio no existe" })
    } else {
        res.status(500).json({ message: "Municipio Eliminado", municipioActualizado })
    }
}
