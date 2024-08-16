class Vehiculo{
    constructor(marca, modelo){
        this.marca = marca
        this.modelo = modelo
    }

    mostrar(){
        return `Marca: ${this.marca}`
    }
}

let Vehiculo1 = new Vehiculo("Honda", "2024");
console.log(Vehiculo1.mostrar());

let vehiculo2 = new Vehiculo(Vehiculo1);
console.log(vehiculo2.mostrar());

