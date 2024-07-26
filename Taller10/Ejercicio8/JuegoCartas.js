class JuegoCartas {
    #baraja;
    #jugadores;

    constructor(palo, valor) {
        this.palo = palo
        this.valor = valor
        this.#baraja = [];
        this.#jugadores = [];
    }

    agregarJugador(jugador) {
        this.#jugadores.push(jugador);
    }

    iniciarBaraja() {
        const palos = ["♥", "♦", "♣", " ♠"];
        const valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        for (let palo of palos) {
            for (let valor of valores) {
                this.#baraja.push({ palo, valor });
            }
        }
    }
}




