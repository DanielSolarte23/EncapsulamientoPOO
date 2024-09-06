import { Municipio } from "../models/municipio.models.js";

export const obtenerMunicipio = async(req, res)=>{
    try {
        const municipios = Municipio.find()
        res.json(municipios)
    } catch (error) {
        res.status(500).json({message: "Error al obtener los municipios"})
    }
}
