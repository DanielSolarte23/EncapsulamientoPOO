import { getAllMunicipios, addMunicipios, updateMunicipo, deleteMunicipio } from "../models/municipio.model.js";

export async function obtenerMunicipios(req, res) {
    try {
        const results = await getAllMunicipios()
        res.send("Este es obtener Municipios")
    } catch (error) {
        res.send(`Error ${error}`);
    }
}
export async function agregarMunicipio(req, res) {
    try {
        const results = await addMunicipios()
        res.send("Este es Agregar Municipio")
    } catch (error) {
        res.send(`Error ${error}`);
    }
}
export async function actualizarMunicipios(req, res) {
    try {
        const results = await updateMunicipo()
        res.send("Este es actualizar Municipios")
    } catch (error) {
        res.send(`Error ${error}`);
    }
}
export async function eliminarMunicipio(req, res) {
    try {
        const results = await deleteMunicipio()
        res.send("Este es Eliminar Municipio")
    } catch (error) {
        res.send(`Error ${error}`);
    }
}
