class Smartphone {
    constructor(bateria, modelo, numSim) {
        this.bateria = bateria
        this.modelo = modelo;
        this.numSim = numSim;
        this.chips = [];//Agregacion
    }
    agregarChips(chip) {
        this.chips.push(chip)
    }
    mostrasInfo(){
        let chipdatos = ""
        for(let i = 0; i < this.chips.length; i++){
            chipdatos+=this.chips[i].empresa;

        }
        return `El smartphone modelo ${this.modelo} tiene capacidad para ${this.numSim} chips de las empresas ${chipdatos} y las especificaciones de su bateria son ${this.bateria.mostrarInfoB()}`

        // this.chips.forEach((chip) =>{
        //     console.log(chip);
        // })
    }
}
class Bateria {
    constructor(marca, voltaje) {
        this.marca = marca;
        this.voltaje = voltaje;
    }
    mostrarInfoB(){
        return `marca ${this.marca} tiene una capacidad de ${this.voltaje}`
    }
}
class Chip{
    constructor(empresa, numSim){
        this.empresa = empresa
        this.numSim = numSim
    }
    mostrarInfo(){
        return `El chip es de la empresa ${this.empresa} y su numero es ${this.numSim}`
    }   
}
let bater = new Bateria("Samsung", "1000 mAh")
let miSmartPhone = new Smartphone(bater, "Galaxy A70","2");

let Claro = new Chip("Claro", "3145636045");
let movistar = new Chip("Movistar", "3225644588");
miSmartPhone.agregarChips(Claro);
miSmartPhone.agregarChips(movistar);

console.log(miSmartPhone.mostrasInfo());


