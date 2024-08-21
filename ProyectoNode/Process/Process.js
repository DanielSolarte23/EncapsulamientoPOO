//El módulo process permite interactuar con el proceso actual de Node.js, proporcionando información y control sobre él.

console.log('ID del proceso:', process.pid);
console.log('Directorio de trabajo actual:', process.cwd());
process.exit(0); // Termina el proceso con un código de salida 0
