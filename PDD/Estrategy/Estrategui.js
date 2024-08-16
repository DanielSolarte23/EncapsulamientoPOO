class Incrementa {
    constructor(){

    }
    realizar(valor) {
        return valor + 1;
    }
}

class Decrementa {
    constructor(){
        
    }
    realizar(valor) {
        return valor - 1;
    }
}


class Contador {
    constructor(numero, operacion) {
        this.numero = numero;
        this.operacion = operacion;
    }

    Operacioon(operacion) {
        this.operacion = operacion;
    }

    CorrerOperacion() {
        this.numero = this.operacion.realizar(this.numero);
        return this.numero;
    }

    obtenerValor() {
        return this.numero;
    }

    actualizarValor(nuevoValor) {
        this.numero = nuevoValor;
    }
}

let valorInicio = 0;
let numeroC = new Contador(valorInicio, new Incrementa()); 

document.querySelector('#capturar').addEventListener('click', () => {
    let numeroE = parseInt(document.querySelector('#numeroInput').value);
    numeroC.actualizarValor(numeroE);
    document.querySelector("#resultado").innerText = numeroC.obtenerValor();
});

document.querySelector('#incrementBtn').addEventListener('click', () => {
    numeroC.Operacioon(new Incrementa());
    let result = numeroC.CorrerOperacion();
    document.querySelector("#resultado").innerText = result;
});

document.querySelector('#decrementBtn').addEventListener('click', () => {
    numeroC.Operacioon(new Decrementa());
    let result = numeroC.CorrerOperacion();
    document.querySelector("#resultado").innerText = result;
});
