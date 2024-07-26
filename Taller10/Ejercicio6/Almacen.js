class Inventario {
  #cantidadStock;

  constructor(codigoProducto, nombreProducto, cantidadStock) {
    this.codigoProducto = codigoProducto;
    this.nombreProducto = nombreProducto;
    this.#cantidadStock = cantidadStock;
  }

  agregarProducto(cantidad) {
    this.#cantidadStock += cantidad;
  }

  retirarProducto(cantidad) {
    if (this.#cantidadStock >= cantidad) {
      this.#cantidadStock -= cantidad;
    } else {
      console.log("No hay suficiente stock para retirar.");
    }
  }

  mostrarStock() {
    console.log(`Stock de ${this.nombreProducto}: ${this.#cantidadStock}`);
  }
}

let inventario = new Inventario("001", "Producto 1", 10);

inventario.agregarProducto(5);

inventario.mostrarStock();

inventario.retirarProducto(3);

inventario.mostrarStock();



























// class Inventario {
//   constructor() {
//     this.productos = {};
//   }

//   agregarProducto(codigoProducto, nombreProducto, cantidad) {
//     if (this.productos[codigoProducto]) {
//       this.productos[codigoProducto].cantidadEnStock += cantidad;
//     } else {
//       this.productos[codigoProducto] = {
//         nombreProducto,
//         cantidadEnStock: cantidad
//       };
//     }
//   }

//   retirarProducto(codigoProducto, cantidad) {
//     if (this.productos[codigoProducto]) {
//       if (this.productos[codigoProducto].cantidadEnStock >= cantidad) {
//         this.productos[codigoProducto].cantidadEnStock -= cantidad;
//       } else {
//         console.log("No hay suficiente stock para retirar.");
//       }
//     } else {
//       console.log("Producto no encontrado.");
//     }
//   }

//   mostrarStock(codigoProducto) {
//     if (this.productos[codigoProducto]) {
//       console.log(`Stock de ${this.productos[codigoProducto].nombreProducto}: ${this.productos[codigoProducto].cantidadEnStock}`);
//     } else {
//       console.log("Producto no encontrado.");
//     }
//   }
// }

// let inventario = new Inventario();

// inventario.agregarProducto("001", "Producto 1", 10);
// inventario.agregarProducto("002", "Producto 2", 20);


// inventario.mostrarStock("001");
// inventario.mostrarStock("002");


// inventario.retirarProducto("001", 5);
// inventario.retirarProducto("002", 10);


// inventario.mostrarStock("001");
// inventario.mostrarStock("002");

