//El módulo timers proporciona funciones para ejecutar código después de un cierto tiempo o en intervalos regulares.

// Ejecutar una función después de 2 segundos
setTimeout(() => {
    console.log('Han pasado 2 segundos.');
}, 2000);

// Ejecutar una función cada segundo
const intervalId = setInterval(() => {
    console.log('1 segundo ha pasado.');
}, 1000);

// Detener el intervalo después de 5 segundos
setTimeout(() => {
    clearInterval(intervalId);
    console.log('Intervalo detenido.');
}, 5000);
