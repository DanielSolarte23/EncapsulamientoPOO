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
