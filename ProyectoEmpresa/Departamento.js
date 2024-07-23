/* Deberá tener un nombre público y una lista de empleados.
Deberá tener métodos para agregar empleados y listar todos los empleados. */
import Empleado from "./Empleado.js";

export default class Departamento {
    constructor(NombreDepartamento) {
        this.NombreDepartamento = NombreDepartamento
        this.listaEmpleados = [];
    }
    agregarEmpleado(nombreEmpleado) {
        this.listaEmpleados.push(nombreEmpleado)
    }
    listarEmpleados() {
        this.listaEmpleados.forEach((empleadoss) => { console.log(empleadoss.nombreEmpleado) });
    };
}