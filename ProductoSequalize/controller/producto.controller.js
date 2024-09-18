const { Producto } = require("../models/producto");

exports.crearProducto = async (req, res) => {
  const { nombre, precio, descripcion } = req.body;
  try {
    const p = await Producto.create({ nombre, precio, descripcion });
    res.json(p);
  } catch (error) {
    req.json({ mensaje: "error" });
  }
};

exports.verPRODUCTOS =async (req,res) =>{
    try {
        const resultador = await Producto.findAll();
        res.json(resultador)
    } catch (error) {
        res.json({mensaje: 'erro'})
    }
}

