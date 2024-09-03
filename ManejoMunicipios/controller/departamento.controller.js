import { getAllDepartamentos, addDepartamento, updateDepartamento, deleteDepartamento } from "../models/departamento.model.js";

export async function obtenerDepartamentos (req, res) {
    try {
        const resultado = await getAllDepartamentos()
        res.json(resultado)
    } catch (error) {
        res.send(`Error ${error}`);
    }
}
export async function agregarDepartamentos(req, res) {
    try {
        const resultado = await addDepartamento()
        res.send("Este es agregar departamentos")
    } catch (error) {
        res.send(`Error ${error}`);
    }
}
export async function actualizarDepartamentos(req, res) {
    try {
        const resultado = await updateDepartamento()
        res.send("Este es obtener departamentos")
    } catch (error) {
        res.send(`Error ${error}`);
    }
}
export async function eliminarDepartamentos(req, res) {
    try {
        const resultado = await deleteDepartamento()
        res.send("Este es eliminar departamentos")
    } catch (error) {
        res.send(`Error ${error}`);
    }
}
