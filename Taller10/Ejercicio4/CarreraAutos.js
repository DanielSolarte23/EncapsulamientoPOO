class Carrera{
    #velocidadMaxima
    #combustibleActual
    constructor(marca, modelo, velocidadMaxima, combustibleActual){
        this.marca = marca
        this.modelo = modelo
        this.#velocidadMaxima = velocidadMaxima
        this.#combustibleActual = combustibleActual
    }
    acelerar(){
        if(this.#combustibleActual > 0){
            for(let i = 0; i < this.#velocidadMaxima; i+=10){
                console.log(`¡¡Acelerando!!: su velocidad es de ${i} km/h`);
            }
            console.log(`A llegado a la Velocidad Maxima ${this.#velocidadMaxima} km/h`);
        }else{
            console.log("Combustible insuficiente");
        }
    }
    frenar(){
        for (let i = this.#velocidadMaxima; i > 0; i-=10) {
            console.log(`¡¡Frenando!!: su velocidad es de ${i} km/h`);
        }
        console.log("Se a detenido el vehiculo");
    }

    aumentarCombustible(Combustible){
        return `¡¡Tanqueado Completo!! el estado de su tanque de combustible es ${this.#combustibleActual + Combustible}%` 
    }
    #mostrarEstado(){
        console.log(`el vehiculo de marca ${this.marca} es modelo ${this.modelo} su velocidad maxima es de ${this.#velocidadMaxima} su tanque de combustible esta en ${this.#combustibleActual} %`);
    }

    estado(){
        this.#mostrarEstado()
    }
}

let ObjCarrera = new Carrera("Ferrari", "2024", 50, 10);
ObjCarrera.acelerar()
console.log(" ");
ObjCarrera.frenar()
console.log(" ");
console.log(ObjCarrera.aumentarCombustible(10));
console.log(" ");
ObjCarrera.estado()