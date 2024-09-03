async function procesarDatos() {
    try {
      let respuesta = await fetch('https://api.example.com/datos');
      let datos = await respuesta.json();
      console.log(datos); // Manejo de los datos una vez que se resuelve la promesa
    } catch (error) {
      console.error('Error:', error); // Manejo de errores si algo falla
    }
  }
  
  procesarDatos();