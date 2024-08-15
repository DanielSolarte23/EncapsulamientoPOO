//Notificar a otros objetos cuando ocurre un evento, como en un chat donde los usuarios reciben mensajes.
class Chats {
    constructor() {
      this.usuarios = [];
    }
    añadirUsuario(usuario) {
      this.usuarios.push(usuario);
    }  
    enviarMensaje(mensaje) {
      this.usuarios.forEach(usuario => usuario.receiveMessage(mensaje));
    }
  }
  class Usuario {
    constructor(nombre) {
      this.nombre = nombre;
    }
  
    receiveMessage(mensaje) {
      console.log(`${this.nombre} recibido: ${mensaje}`);
    }
  }
  
  const chat = new Chats();
  const usuario1 = new Usuario('Mafe');
  const usuario2 = new Usuario('Catalina');
  
  chat.añadirUsuario(usuario1);
  chat.añadirUsuario(usuario2);
  
  chat.enviarMensaje('Hola!'); // "Mafe recibido: Hola!" y "Catalina recibido: Hola!"
  