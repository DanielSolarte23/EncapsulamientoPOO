class CuentaBancaria {
    _Ncuenta
    #Clave
    _nombrePropietario
    _fecha
    #cantidadDinero

    constructor(cuenta, contraseña, propietario, fechaExp, saldo) {
        this._Ncuenta = cuenta
        this.#Clave = contraseña
        this._nombrePropietario = propietario
        this._fecha = fechaExp
        this.#cantidadDinero = saldo
    }

    depositar(monto) {
        return this.#cantidadDinero + monto
    }

    movimientos(monto) {
        return this.#cantidadDinero - monto
    }
    #saldo() {
        return this.#cantidadDinero
    }
    saldoTotal(){
        return this.#saldo()
    }
    mostrarInformacion(){
        console.log(this._Ncuenta);
    }
}
let objCB = new CuentaBancaria("123", "456", "Maria Solarte", "19/07/2024", 20000);

// objCB._Ncuenta="123456789";
// objCB.mostrarInformacion();
console.log(objCB.depositar(500));
console.log(objCB.movimientos(200));
console.log(objCB.saldoTotal());
console.log();

//Implementar una clase con su constructor titulo, precio y stocks  privados-> validar Cantidad publics -> agregar stock vender y mostrar detalles. las propiedades privadas, titulo precio y stock 

//subClase autor las propiedades privadas nameAutor publicaBiografia, metodoP Obtener info. clase commit clase padre y la clase auto es hijo  









// Crear una instancia de la clase JuegoCartas
let juego = new JuegoCartas("Corazones", "A", [], []);

// Agregar jugadores
juego.agregarJugador(new Jugador("Jugador 1"));
juego.agregarJugador(new Jugador("Jugador 2"));

// Crear baraja
for (let i = 0; i < 52; i++) {
  juego.baraja.push({
    palo: ["Corazones", "Diamantes", "Tréboles", "Picas"][Math.floor(i / 13)],
    valor: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"][i % 13]
  });
}

// Barajar y repartir cartas
juego.barajar();
juego.repartir();

// Mostrar manos de los jugadores
juego.mostrarMano(juego.#jugadores[0]);
juego.mostrarMano(juego.#jugadores[1]);

// Iniciar juego
juego.jugar();
