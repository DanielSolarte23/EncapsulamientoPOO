//El módulo os proporciona funciones para obtener información sobre el sistema operativo.

const os = require('os');

console.log('Sistema operativo:', os.platform());
console.log('Memoria libre:', os.freemem(), 'bytes');
console.log('Directorio temporal:', os.tmpdir());
