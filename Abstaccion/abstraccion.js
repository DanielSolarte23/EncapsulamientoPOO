//Las clases abstractas son aquellas que no se pueden instanciar

class Electronicos {
    constructor(marca, modelo) {//Clase Abstracta no se puede instanciar
        this.marca = marca
        this.modelo = modelo
        if (this.constructor === Electronicos) {
            throw new Error("Esta clase no se puede instanciar ya que es abstracta")
        }
    }
    infoElectronico() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`);
    }
    //metodo abstracto 
    stockElectronico() {
        throw new Error("Este Metodo stock Electronico debe ser implementado en la clase Hija")
    }
}

class Pc extends Electronicos {
    constructor(SistemaOperativo, marca, modelo) {
        super(marca, modelo)
        this.SistemaOperativo = SistemaOperativo
    }
    infoPc() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Sistema Operativo: ${this.SistemaOperativo}`);
    }
}

class Tv extends Electronicos {
    constructor(tamaño, marca, modelo) {
        super(marca, modelo)
        this.tamaño = tamaño
    }
}

// let ObjElectronic = new Electronicos("Sony", 2023)
// ObjElectronic.infoElectronico()

let ObjPc = new Pc("Kali Linux", "Lenovo", "2024");
ObjPc.infoPc();
ObjPc.stockElectronico();
