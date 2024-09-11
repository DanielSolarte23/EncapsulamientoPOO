import mongoose from "mongoose";

const jugadoresShema = new mongoose.Schema({
    alias: {
        type: String,
        require: true
    },
    puntaje: {
        type: Number,
        require: false
    }

});

const JuegoShema = new mongoose.Schema({
    nombre: {
        type: String,
        require: true
    },
    jugadores: {
        type: [jugadoresShema],
        validate: [arrayLimit, "es necesario al menos un jugador"]
    }
})

function arrayLimit(num){
    return num.length>0 // limite 1
}

export const Juego = mongoose.model('Juego', JuegoShema)