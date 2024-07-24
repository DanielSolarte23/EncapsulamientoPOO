class Banco {
    #tipoCuenta
    constructor(nombreTitular, saldo, tipoCuenta) {
        this.nombreTitular = nombreTitular
        this.saldo = saldo
        this.#tipoCuenta = tipoCuenta
    }
    depositar(monto) {
        return this.saldo += monto
    }
    retiro(monto) {
        if (this.saldo > 0) {
            return this.saldo - monto
        }else{
            console.log("Saldo Insificiente");
        }
    }
    mostrarSaldo() {
        console.log(this.saldo);
    }

    #getMostrarcuenta(){
        console.log(this.#tipoCuenta);
    }

    MostrarTipoCuenta(){
        return this.#getMostrarcuenta()
    }
}

let objTitular = new Banco("Richi", 20000, "Ahorros");

console.log(objTitular.depositar(10000));
console.log(objTitular.retiro(5000));
objTitular.MostrarTipoCuenta()