// class Numero {
//     constructor() {
//         this.numero = 0;
//     }

//     obtenerNumero() {
//         return parseInt(document.querySelector('#inputN').value);
//     }

//     incrementar() {
//         this.numero = this.obtenerNumero() + 1;
//         document.querySelector('#inputN').value = this.numero;
//         return this.numero;
//     }

//     decrementar() {
//         this.numero = this.obtenerNumero() - 1;
//         document.querySelector('#inputN').value = this.numero;
//         return this.numero;
//     }
// }

// let Num = new Numero();

// document.querySelector('#IncrementarBtn').addEventListener('click', () => {
//     let result = document.querySelector('#resultado');
//     result.innerText = Num.incrementar();
// });

// document.querySelector('#DecrementarBtn').addEventListener('click', () => {
//     let result = document.querySelector('#resultado');
//     result.innerText = Num.decrementar();
// });


class Contador{
    constructor(numero){
        this.numero = numero
    }
    incrementar(cont){
        this.numero= parseInt(cont)+1;
        return this.numero
    }
    decrementar(cont){
        this.numero= parseInt(cont)-1;
        return this.numero
    }
}

let numeroC = new Contador();
document.querySelector('#IncrementarBtn').addEventListener('click', ()=>{
    let nc = document.querySelector('#inputN').value

    let resultI=numeroC.incrementar(nc);
    document.querySelector('#resultado').innerText = resultI
})