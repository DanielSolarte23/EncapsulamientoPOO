class Perro {
    sonido() {
      console.log('Woof!');
    }
  }
  
  class Gato {
    sonido() {
      console.log('Meow!');
    }
  }
  
  class MascotaFactory {
    static crearMascota(tipo) {
      if (tipo === 'dog') {
        return new Perro();
      } else if (tipo === 'cat') {
        return new Gato();
      }
    }
  }
  
  const mascota1 = MascotaFactory.crearMascota('dog');
  mascota1.sonido(); // "Woof!"
  
  const mascota2 = MascotaFactory.crearMascota('cat');
  mascota2.sonido(); // "Meow!"
  