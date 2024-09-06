import mongoose from "mongoose";

const DepartamentoShema = new mongoose.Schema({
    nombre: {
        type: String,
        require: true
    },
    descripcion:{
        type: String,
        require:false
    }
});

export const Departamento = mongoose.model('Departamento', DepartamentoShema)