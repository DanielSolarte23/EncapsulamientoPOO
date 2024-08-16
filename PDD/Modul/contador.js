class Contador {
    constructor(numero) {
        this.numero = numero;
    }
    incrementar() {
        this.numero += 1
        return this.numero;
    }
    decrementar() {
        this.numero -= 1
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
let numeroC = new Contador(valorInicio);

document.querySelector('#capturar').addEventListener('click', () => {
    let numeroE = parseInt(document.querySelector('#numeroInput').value)
    numeroC.actualizarValor(numeroE);
    document.querySelector("#resultado").innerText = numeroC.obtenerValor();
});


document.querySelector('#incrementBtn').addEventListener('click', () => {
    numeroC.incrementar();
    let result = numeroC.obtenerValor();
    numeroC.actualizarValor(result)
    document.querySelector("#resultado").innerText = result
});

document.querySelector('#decrementBtn').addEventListener('click', () => {
    numeroC.decrementar();
    let result = numeroC.obtenerValor();
    numeroC.actualizarValor(result)
    document.querySelector("#resultado").innerText = result
});


//crear clases de incrementar y decrementar 
//clases incrementar y decrementar

//hacer este ejercicio con la el patron estrategy;