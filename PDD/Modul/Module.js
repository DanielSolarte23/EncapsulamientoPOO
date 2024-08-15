class Listausuario {
    constructor() {
        this.nombres = [];
    }

    agregarNombres(nombre) {
        this.nombres.push(nombre);
    }

    listarNombre() {
        let listaN = "";
        for (let i = 0; i < this.nombres.length; i++) {
            listaN += this.nombres[i];
        }258
        return listaN;
    }
}

let listaUsuarios = new Listausuario();
document.querySelector('#enviar').addEventListener('click', () => {
    let nInput = document.querySelector('#IngresarUsuarios').value;
    listaUsuarios.agregarNombres(nInput);

    let NUl = document.querySelector('#Lista');
    let Nli = document.createElement('li');
    Nli.textContent = nInput;
    NUl.append(Nli);


    document.querySelector('#IngresarUsuarios').value = '';

});
