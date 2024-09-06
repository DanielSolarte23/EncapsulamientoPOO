import mongoose from "mongoose";

const MunicipioShema = new mongoose.Schema({
    nombre: {
        type: String,
        require: true
    },
    descripcion:{
        type: String,
        require:false
    }
});

export const Municipio = mongoose.model('Municipio', MunicipioShema)