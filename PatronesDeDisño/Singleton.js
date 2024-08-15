//Asegurar que solo exista una única instancia de una clase, como un registro de usuario.
class RegistroDeUsuario {
  constructor() {
    if (RegistroDeUsuario.instance) {
      return RegistroDeUsuario.instance;
    }
    this.Usuario = [];
    RegistroDeUsuario.instance = this;
  }

  añadirUsuario(Usuario) {
    this.Usuario.push(Usuario);
  }

  getUsuario() {
    return this.Usuario;
  }
}

const registro1 = new RegistroDeUsuario();
const registro2 = new RegistroDeUsuario();

registro1.añadirUsuario('Alice');
console.log(registro2.getUsuario()); // ["Alice"] (ambos apuntan al mismo registro)


