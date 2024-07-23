/* Desarrolla un sistema de gestión de empleados para una empresa. La empresa tiene varios departamentos y cada departamento tiene múltiples empleados. El sistema debe incluir clases para Empresa, Departamento y Empleado, y debe aplicar principios de encapsulamiento usando atributos y métodos públicos, privados y protegidos. La información confidencial de los empleados, como el salario, debe ser accesible solo dentro de las clases y no debe estar disponible fuera de ellas. */

/* Empresa
Deberá tener un nombre público y una lista de departamentos.
Deberá tener métodos para agregar departamentos y listar todos los departamentos.
 */
import Departamento from "./Departamento.js";


export default class Empresa {
    constructor(nombre) {
        this.nombre = nombre
        this.departamentos = [];
    }
    agregarDepartamentos(nombreD) {
        this.departamentos.push(nombreD);
    }
    listarDepartamentos() {
        this.departamentos.forEach((departamento) => {
            console.log(departamento.NombreDepartamento)}
        )
    };

}

