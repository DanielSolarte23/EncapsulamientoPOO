//El módulo fs permite interactuar con el sistema de archivos, como leer y escribir archivos.

const fs = require('fs');

// Escribir en un archivo
fs.writeFileSync('mensaje.txt', 'Hola, mundo!');

// Leer el contenido de un archivo
const contenido = fs.readFileSync('mensaje.txt', 'utf8');
console.log(contenido);
