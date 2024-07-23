let Protegido = new WeakMap()
class Continente {
    constructor(nombre, poblacion) {
        Protegido.set(this, { nombre });
        this.poblacion = poblacion
    }
    informacionContinente() {
        let data = Protegido.get(this)
        return `Soy el contienente ${data.nombre} y mi poblacione es ${this.poblacion}`
    }
};

class Pais extends Continente {
    constructor(nombrePais, nombre, poblacion) {
        super(nombre, poblacion)
        this.nombrePais = nombrePais
    }

    infoPais() {
        let Datos = Protegido.get(this)
        return `Soy el pais ${this.nombrePais}, pertenezco al pais ${Datos.nombre} , y mi poblacion es de ${this.poblacion}`
    }
}

let continente = new Continente("Sur-America", 70000000)


let pais = new Pais("Colombia", "Sur-America", 2000000)

console.log(continente.informacionContinente());
console.log(pais.infoPais());
