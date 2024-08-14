class Camioneta {
    constructor() {
        this.tipo = "camioneta";
        this.descripcion = "Vehiculo grande y espacioso de carga";
    }
    mostrar() {
        return `Tipo: ${this.tipo} descripcion: ${this.descripcion}`;
    }
}

class Sedan {
    constructor() {
        this.tipo = "Sedan";
        this.descripcion = "Vehiculo comodo y elegante";
    }

    mostrar() {
        return `Tipo: ${this.tipo} descripcion: ${this.descripcion}`;
    }
}

class Deportivo {
    constructor() {
        this.tipo = "Deportivo";
        this.descripcion = "Vehiculo rapido y con diseño";
    }

    mostrar() {
        return `Tipo: ${this.tipo} descripcion: ${this.descripcion}`;
    }
}

class Vehiculo {
    solicitarVehiculo(tipo) {
        if (tipo == "camioneta") {
            let Camion = new Camioneta();
            return Camion.mostrar();
        } else if (tipo == "sedan") {
            let Sed = new Sedan();
            return Sed.mostrar();
        } else if (tipo == "deportivo") {
            let Depor = new Deportivo();
            return Depor.mostrar();
        }
    }
}

document.querySelector('#CrearBtn').addEventListener('click', () => {
    let TipoV = document.querySelector('#tipovehiculo').value;
    let vehicul = new Vehiculo();
    let ve = vehicul.solicitarVehiculo(TipoV);
    document.querySelector('#resultado').innerText = ve;
});
