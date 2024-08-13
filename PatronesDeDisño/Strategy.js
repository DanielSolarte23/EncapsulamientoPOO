//Cambiar el comportamiento de un objeto según la situación, como en un juego donde un personaje puede usar diferentes armas.
class Espada {
    ataque() {
        console.log('Desenfundando una espada!');
    }
}
class Arco {
    ataque() {
        console.log('Disparando una flecha!');
    }
}
class Caracter {
    setArma(arma) {
        this.arma = arma;
    }

    ataque() {
        this.arma.ataque();
    }
}

const character = new Caracter();

character.setArma(new Espada());
character.ataque(); // "Desenfundando una espada!"

character.setArma(new Arco());
character.ataque(); // "Disparando una flecha!"

