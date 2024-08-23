class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    infoPersona() {
        return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
    }
}

class Empresa {
    constructor(nombre, direccion, telefono, correo, paginaWeb, nit) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.correo = correo;
        this.paginaWeb = paginaWeb;
        this.nit = nit;
        this.horarios = [];
        this.empleados = [];
    }
    informacion() {
        return `La empresa ${this.nombre}, ubicada en la dirección ${this.direccion} con NIT ${this.nit}: su información de contacto es correo: ${this.correo}, teléfono: ${this.telefono}, página web: ${this.paginaWeb}.`;
    }
    agregarHorario(nuevoHorario) {
        this.horarios.push(nuevoHorario);
    }
    agregarEmpleado(nuevoEmpleado) {
        this.empleados.push(nuevoEmpleado);
    }
    eliminarEmpleado(indiceEmpleado) {
        if (indiceEmpleado >= 0 && indiceEmpleado < this.empleados.length) {
            this.empleados.splice(indiceEmpleado, 1);
        }
    }
    modificarEmpleado(indiceEmpleado, datosEmpleado) {
        if (indiceEmpleado >= 0 && indiceEmpleado < this.empleados.length) {
            this.empleados[indiceEmpleado] = datosEmpleado;
        }
    }
}

class Empleado extends Persona {
    constructor(nombre, edad, sueldo, tipoEmpleado) {
        super(nombre, edad);
        this.sueldo = sueldo;
        this.tipoEmpleado = tipoEmpleado;
    }
    infoEmpleado() {
        return `El empleado ${this.nombre}, de ${this.edad} años, recibe un sueldo de ${this.sueldo} y su cargo es de ${this.tipoEmpleado}.`;
    }
}

class Cliente extends Persona {
    constructor(nombre, edad, telefono) {
        super(nombre, edad);
        this.telefono = telefono;
    }
    infoCliente() {
        return `El cliente ${this.nombre} tiene ${this.edad} años. Su teléfono de contacto es ${this.telefono}.`;
    }
}

