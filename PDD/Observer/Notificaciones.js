// class Chat {
//     constructor() {
//         this.mensajes = [];
//     }
//     addMsj(chat) {
//         this.mensajes.push(chat);
//     }
//     notificacion() {
//         let mensa = document.querySelector('#NotificacionText');
//         mensa.innerText = this.mensajes.join(', ');
//     }
// }

// let Boton = document.querySelector('#BotonNotificacion').addEventListener('click', () => {
//     let Pepito = new Chat()
//     Pepito.addMsj("Hola Como Estas")
//     Pepito.addMsj("Bien Gracias a Dios")
//     Pepito.notificacion()
// })

class Chat {
    constructor() {
        this.mensajes = [];
    }
    addMsj(chat) {
        this.mensajes.push(chat);
    }
    notificacion(mss) {
        this.mensajes.forEach(observador =>observador(mss))
    }
}
let Pepito = new Chat()
function observador(MensajeE){
    document.querySelector('#NotificacionText').innerText = MensajeE
}
Pepito.addMsj(observador)

let Boton = document.querySelector('#BotonNotificacion').addEventListener('click', () => {
    Pepito.notificacion()
})