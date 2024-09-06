import { Departamento } from "../models/departamento.models.js";

export const obtenerDpto = async(req, res)=>{
    try {
        const departamentos = Departamento.find()
        res.json(departamentos)
    } catch (error) {
        res.status(500).json({message: "Error al obtener los departamentos"})
    }
}

export const crearDpto = async(req,res)=>{
    try {
        const {nombre} = req.body
        const nuevoDato = new Departamento({nombre})
        await nuevoDato.save();
        res.json({message: nuevoDato})
    } catch (error) {
        res.status(500).json({message: "Error al ingresar depto"})
    }
}