class Agenda {
    //atributo Privada
    #contacts
    constructor(Nombre) {

        this.Nombre = Nombre;
        //Areglo para la lista de contacto Privado
        this.#contacts = [];
    }
    
    //Metodo para agregar contacto
    agregarContacto(Contact) {
        this.#contacts.push(Contact);
    }
    //Metodo para editar contacto
    EditarContacto(posicion, nuevoValor) {
        this.#contacts[posicion] = nuevoValor;
    }
    //Metodo para eliminar contacto
    EliminarContacto(Contact) {
        const index = this.#contacts.indexOf(Contact);
        this.#contacts.splice(index, 1);
    }
    //Metodo para mostrar contactos
    MostrarContactos() {
        this.#contacts.forEach((contacto) => {
            console.log(contacto);
        });
    }
}

class Contacto {
    constructor(nombre, apellido, telefono, correoElectronico) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.correoElectronico = correoElectronico;
    }
}
//Crear Agenda
let Agenda1 = new Agenda("Agenda1");
//Creacion del contacto
let ContactoRichi = new Contacto("Richi", "Sanchez", "3145636042", "richisanchez@gmail.com");
//Agregar Contacto a la Agenda
Agenda1.agregarContacto(ContactoRichi);
//Crear Otro contacto
let ContactoMafe = new Contacto("Mafe", "Anaya", "3155622558", "MafeAa@gmail.com");
//Agregar otro contacto a la  agenda
Agenda1.agregarContacto(ContactoMafe);

//Contacto modificado
let ContactoMafe2 = new Contacto("Mafe", "Rivera", "3145658", "Mafs@gmail.com");
//Remplazar el contacto 
Agenda1.EditarContacto(1, ContactoMafe2);

//Eliminar contacto
Agenda1.EliminarContacto(ContactoRichi);
//Mostar
Agenda1.MostrarContactos();
