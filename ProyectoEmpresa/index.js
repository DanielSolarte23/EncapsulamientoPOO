import Empresa from "./Empresa.js";
import Departamento from "./Departamento.js";
import Empleado from "./Empleado.js";


let miEmpresa = new Empresa("techCoro");

let desarrollo = new Departamento("Desarrollo");
miEmpresa.agregarDepartamentos(desarrollo);
let recursosHumanos = new Departamento("Recursos Humanos");
miEmpresa.agregarDepartamentos(recursosHumanos);
let marketing = new Departamento("Marketing");
miEmpresa.agregarDepartamentos(marketing);
let logistica = new Departamento("Logistica");
miEmpresa.agregarDepartamentos(logistica);
miEmpresa.listarDepartamentos();



let empleado = new Empleado("Richi Sanchez", 50000000)
desarrollo.agregarEmpleado(empleado)
let empleado2 = new Empleado("Caramelito Anaya", 90000000)
recursosHumanos.agregarEmpleado(empleado2)
let empleado3 = new Empleado("Juan Erazo", 70000000)
marketing.agregarEmpleado(empleado3)
let empleado4 = new Empleado("maja Erazo", 20000000)
logistica.agregarEmpleado(empleado4)

desarrollo.listarEmpleados()
recursosHumanos.listarEmpleados()
marketing.listarEmpleados()
logistica.listarEmpleados()



empleado.infoEmpleado()
empleado2.infoEmpleado()
empleado3.infoEmpleado()
empleado4.infoEmpleado()


