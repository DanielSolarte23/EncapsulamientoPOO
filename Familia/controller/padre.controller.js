const { Padre } = require('../models/padre');

// Crear un nuevo registro de Padre
exports.crearPadre = async (req, res) => {
    const { nombre, direccion, telefono } = req.body;
    try {
        const p = await Padre.create({ nombre, direccion, telefono });
        res.json(p); 
    } catch (error) {
        console.error(error);
        res.json({ mensaje: "error" });
        console.log(error);
        
    }
};


exports.verPadre = async (req, res) => {
    try {
        const resultado = await Padre.findAll();
        res.json(resultado);
    } catch (error) {
        console.error(error);
        res.json({ mensaje: "error" });
    }
};

// Actualizar un registro de Padre por ID
exports.actualizarPadre = async (req, res) => {
    const { id } = req.params;
    const { nombre, direccion, telefono } = req.body;
    try {
        let resPadre = await Padre.findByPk(id); // Cambiado a Padre.findByPk
        if (resPadre) {
            resPadre.nombre = nombre;
            resPadre.direccion = direccion;
            resPadre.telefono = telefono;
            await resPadre.save();
            res.json({ mensaje: "actualizado" });
        } else {
            res.json({ mensaje: "Padre no encontrado" });
        }    
    } catch (error) {
        console.error(error);
        res.json({ mensaje: "error en actualizar" });
    }
};

// Eliminar un registro de Padre por ID
exports.eliminarPadre = async (req, res) => {
    const { id } = req.params;
    try {
        const eliminar = await Padre.findByPk(id); // Cambiado a Padre.findByPk
        if (eliminar) {
            await eliminar.destroy();
            res.json({ mensaje: "Padre eliminado" });
        } else {
            res.json({ mensaje: "Padre no encontrado" });
        }
    } catch (error) {
        console.error(error);
        res.json({ mensaje: "error no eliminado" });
    }
};
