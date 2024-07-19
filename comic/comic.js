class Comic {
    #titulo;
    #precio;
    #stock;

    constructor(titulo, precio, stock) {
        this.#titulo = titulo;
        this.#precio = precio;
        this.#stock = stock;
    }

    #validarStock() {
        if (this.#stock > 0) {
            return `El stock del comic es ${this.#stock}`;
        } else {
            return "No hay stock disponible";
        }
    }

    #AgregarStock(NuevoStock) {
        return this.#stock + NuevoStock;
    }

    #vender(cantidad) {
        let venta = this.#stock - cantidad;
        return `Se han vendido ${cantidad} comics, quedan ${venta}`;
    }

    #objDetalle() {
        return `En la tienda de comics hay ${this.#stock} comics de título ${this.#titulo} y su precio es ${this.#precio}`;
    }

    MostrarTitulo() {
        return this.#objDetalle();
    }

    MostrarStock() {
        return this.#validarStock();
    }

    MostrarVenta(cantidad) {
        return this.#vender(cantidad);
    }

    getTitulo() {
        return this.#titulo;
    }
}

class Autor extends Comic {
    #NombreAutor;
    _Biografia;

    constructor(nombreAutor, biografia, titulo, precio, stock) {
        super(titulo, precio, stock);
        this.#NombreAutor = nombreAutor;
        this._Biografia = biografia;
    }

    obtenerInfo() {
        return `El autor ${this.#NombreAutor}, su biografía: ${this._Biografia}, es el autor del comic ${this.getTitulo()}`;
    }
}

let comics = new Comic("Batman", 20000, 2);
console.log(comics.MostrarTitulo());
console.log(comics.MostrarStock());
console.log(comics.MostrarVenta(1));

let autor = new Autor("Daniel", "Popayan 12/15/2022", "Superman", 30000, 5);
console.log(autor.obtenerInfo());
