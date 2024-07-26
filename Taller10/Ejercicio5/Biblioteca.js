
class Libro {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
        this.disponible = true;
    }

    prestarLibro() {
        if (this.disponible) {
            this.disponible = false;
            console.log(`El libro "${this.titulo}" ha sido prestado.`);
        } else {
            console.log(`El libro "${this.titulo}" no está disponible.`);
        }
    }

    devolverLibro() {
        if (!this.disponible) {
            this.disponible = true;
            console.log(`El libro "${this.titulo}" ha sido devuelto.`);
        } else {
            console.log(`El libro "${this.titulo}" ya está disponible.`);
        }
    }

    mostrarEstado() {
        if (this.disponible) {
            console.log(`El libro "${this.titulo}" está disponible.`);
        } else {
            console.log(`El libro "${this.titulo}" no está disponible.`);
        }
    }
}

let libro = new Libro("Las taxicas de ADSO CYM", "Richi Sanchez");


libro.prestarLibro();

libro.mostrarEstado();

libro.devolverLibro();

libro.mostrarEstado();

