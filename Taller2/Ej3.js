class Pedido {
    constructor(producto, cliente, metodo_pago,) {
        this.producto = new producto()
        this.cliente = new cliente()
        this.metodo_pago = new metodo_pago()
    }
    totalPedido() {

    }

    setEstado(estado) {

    }

    getEstado() {

    }

    infoPedido() {

    }
}

class Productos {
    constructor(tiempo_entrega) {
        this.tiempo_entrega = tiempo_entrega;
        this.producto = [
            {
                nombre_Producto: "Disco duro",
                marca: "Samsung",
                capacidad: "1TB",
                tipo: "SSD",
                interfaz: "SATA",
                precio: 100,
                impuesto: 0.19,
                tiempo_entrega: 5 
            },
            {
                nombre_Producto: "Procesador",
                modelo: "Intel Core i9-12900K",
                nucleos: 16,
                frecuencia: "3.2 GHz",
                socket: "LGA 1700",
                precio: 500,
                impuesto: 0.15,
                tiempo_entrega: 7 
            },
            {
                nombre_Producto: "Tarjeta Grafica",
                modelo: "NVIDIA GeForce RTX 3080", 
                memoria: "10 GB GDDR6X",
                tipo: "PCIe 4.0",
                puertos: ["HDMI", "DisplayPort"],
                precio: 700,
                impuesto: 0.18,
                tiempo_entrega: 6 
            },
            {
                nombre_Producto: "Memoria RAM",
                modelo: "Corsair Vengeance LPX",
                capacidad: "16GB (2 x 8GB)",
                tipo: "DDR4",
                velocidad: "3200 MHz",
                precio: 80,
                impuesto: 0.10,
                tiempo_entrega: 4 
            },
            {
                nombre_Producto: "Board",
                modelo: "ASUS ROG Strix Z690-E",
                socket: "LGA 1700",
                chipset: "Intel Z690",
                formato: "ATX",
                ranuras_RAM: 4,
                precio: 300,
                impuesto: 0.12,
                tiempo_entrega: 7 
            },
            {
                nombre_Producto: "Fuente",
                modelo: "Corsair RM750x",
                potencia: "750W",
                certificacion: "80+ Gold",
                modular: true,
                precio: 120,
                impuesto: 0.16,
                tiempo_entrega: 5 
            },
            {
                nombre_Producto: "Gabinete",
                modelo: "NZXT H510",
                formato: "ATX",
                puertos: ["USB 3.0", "USB-C", "Audio"],
                ventiladores_incluidos: 2,
                precio: 70,
                impuesto: 0.08,
                tiempo_entrega: 3 
            },
            {
                nombre_Producto: "Monitor",
                modelo: "Dell UltraSharp U2720Q",
                tamaño: "27 pulgadas",
                resolucion: "3840x2160 (4K UHD)",
                tipo_panel: "IPS",
                puertos: ["HDMI", "DisplayPort", "USB-C"],
                precio: 500,
                impuesto: 0.14,
                tiempo_entrega: 6 
            }
        ];
    }

    calcularTiempoEntrega(nombre_Producto) {
        const productoEncontrado = this.producto.find(p => p.nombre_Producto === nombre_Producto);
        if (productoEncontrado) {
            return `${productoEncontrado.nombre_Producto} será entregado en ${productoEncontrado.tiempo_entrega} días.`;
        } else {
            return "Producto no encontrado.";
        }
    }
}

class Cliente{
    constructor(nombre, apellido, identificacion, telefono){
        this.nombre = nombre
        this.apellido = apellido
        this.identificacion = identificacion
        this.telefono = telefono
    }
    infoCliente(){
        return `nombre: ${this.nombre} apellido: ${this.apellido} identificacion: ${this.identificacion} telefono: ${this.telefono}`
    }
}

class Pago{
    constructor(cuotas, ){
        this.cuotas = cuotas
        this.metodo_pago = [
            {
                nombre: "tajeta Credito",
                fecha_caducidad: "10/2028",
                banco: "Bancolombia",
                
            }
        ]
    }
}