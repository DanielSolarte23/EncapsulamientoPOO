let Protegido = new WeakMap()

class Zoo{
    constructor(NombreZoologico, Nzonas){
        Protegido.set(this, {NombreZoologico});
        this.Nzonas = Nzonas        
        this.obtenerNombreZ = () =>{
            let datoNombre = Protegido.get(this);
            return datoNombre.NombreZoologico
        }
    }
    infoZoologico(){
        console.log( `Bienvenido al zoologico ${this.obtenerNombreZ()} contamos con ${this.Nzonas} zonas`);
    }
}

class AnimalesAcuaticos extends Zoo {
    constructor(nombre, especie, NombreZoologico, Nzonas){
        super(NombreZoologico, Nzonas)
        this.nombre = nombre
        this.especie = especie
    }

    InfoAnimales(){

        console.log(`El animal ${this.nombre} de la especie ${this.especie} pertenecen al zoologico ${this.obtenerNombreZ()} que cuenta con ${this.Nzonas} Zonas`);
    }
}

let zool = new Zoo("Zoolo", 5)
zool.infoZoologico()

let animales = new AnimalesAcuaticos("Pez Payaso", "Acuatico", "Zoolo", 10);
animales.InfoAnimales()
