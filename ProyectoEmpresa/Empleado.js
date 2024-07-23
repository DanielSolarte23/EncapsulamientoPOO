/* Deberá tener un nombre público y una propiedad privada para el salario.
Deberá tener un método protegido para obtener el salario.
Deberá tener un método público para obtener la información del empleado. */

let Protegido = new WeakMap();

export default class Empleado{
    nombreEmpleado
    #salario
    constructor(nombreEmpleado, salario){
        this.nombreEmpleado = nombreEmpleado
        this.#salario = salario
        this.obtenerSalario = () => {
            return this.#salario
        }
    }
    infoEmpleado(){
        console.log(`El Empleado ${this.nombreEmpleado} tiene un salario de ${this.obtenerSalario()}`);
    }
}

