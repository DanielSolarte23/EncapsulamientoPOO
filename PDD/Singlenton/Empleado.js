class Empleado {
    static instancia
    constructor(nombre) {
        if(!Empleado.instancia){
            this.nombre = nombre;
            Empleado.instancia=this;
        }else{
            return Empleado.instancia
        }
    }
    mostrarDatos() {
        return this.nombre
    }
}

document.querySelector('#empleadoBtn').addEventListener('click', function() {
    let Empleado1 = new Empleado("Richi Sanchez")
    let Empleado2 = new Empleado("Maja Erazo")
    let Parrafo = document.querySelector('#empleadoText')

    Parrafo.innerText = Empleado1.mostrarDatos()
    Parrafo.innerText = Empleado2.mostrarDatos()
})
