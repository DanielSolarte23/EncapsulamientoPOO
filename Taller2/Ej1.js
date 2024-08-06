class Persona{
    constructor(Nombre, Apellido, Edad, Sexo, Domicilio, Fecha, lugarCelebracion, tipo){
        this.matrimonio = new Matrimonio(Fecha, lugarCelebracion, tipo)
        this.nombre = Nombre
        this.apellido = Apellido
        this.edad = Edad
        this.sexo = Sexo
        this.domicilio = Domicilio
    }
    ActualizarDatos(Name, apell, edad, sex, domi) {
        this.nombre = Name;
        this.apellido = apell;
        this.edad = edad;
        this.sexo = sex;
        this.domicilio = domi;
    }
    InformacionPersona(){
        return `La persona ${this.nombre} ${this.apellido} de edad ${this.edad} y su de genero ${this.sexo} y su direccion es ${this.domicilio}`
    }    
}

class Matrimonio{
    constructor(Fecha, lugarCelebracion, tipo){
        this.fecha = Fecha
        this.lugarCelebracion = lugarCelebracion
        this.tipo = tipo
        this.pareja1 = []
    }
    #registrarMatrimonio(){
        return `Se registro el matrimonio de ${this.pareja1[0]} y ${this.pareja1[1]} en la fecha ${this.fecha} en ${this.lugarCelebracion} matrimonio tipo ${this.tipo}`
    }

    mostrarInfo(){
        this.#registrarMatrimonio()
    }
}