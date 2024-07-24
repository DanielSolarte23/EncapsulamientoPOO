class BibliotecaMusica {
    titulo //Propiedad Publica
    artista //Propiedad Publica
    #duracion // Propiedad Privada
    //Constructor
    constructor(titulo, artista, duracion) {
        this.titulo = titulo
        this.artista = artista
        this.#duracion = duracion
        //Arreglo que almacena las canciones
        this.Cancion = []
    }
    //Metodo para agregar canciones al arreglo
    agregarCancion(cancion) {
        this.Cancion.push(cancion);
    }
    //Metodo para eliminar Canciones
    eliminarCancion(cancion) {
        //Metodo para buscar 
        const index = this.Cancion.indexOf(cancion);

        this.Cancion.splice(index, 1);

    }
    //Metodo para mostrar detalles
    mostrarDetalle() {
        console.log(`La cancion ${this.Cancion[1]} del artista ${this.artista} tiene una duracion de ${this.#duracion}`); //Mostrar atributo privado en un metodo publico
    }
}
//Instancia Biblioteca
let ObjBiblioteca = new BibliotecaMusica("Use Your Ilusion 1 ", "Guns and Roses", "5:56 minutos");

//Agregar canciones
ObjBiblioteca.agregarCancion("Sweed Childs O'Mine");
ObjBiblioteca.agregarCancion("Dont Cry");
ObjBiblioteca.agregarCancion("November Rain");

ObjBiblioteca.eliminarCancion("November Rain")

ObjBiblioteca.Cancion.forEach(cancion => {
    console.log(cancion);
})

ObjBiblioteca.mostrarDetalle()