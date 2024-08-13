//Agrupar funciones relacionadas y mantener privado el estado interno, como en una calculadora simple.

const Calculadora = (function () {
    let resultado = 0;  

    function suma(valor) {
        resultado += valor;
    }

    function resta(valor) {
        resultado -= valor;
    }

    function getResultado() {
        return resultado;
    }

    return {
        suma,
        resta,
        getResultado
    };
})();

Calculadora.suma(5);
Calculadora.resta(2);
console.log(Calculadora.getResultado()); // 3

