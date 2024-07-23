let Mapa = new Map()
Mapa.set("nombre", "Daniel");
Mapa.set("Apellido", "Solarte")
Mapa.set("Edad", "25")



console.log(Mapa.get("nombre"));
console.log(Mapa.get("Apellido"));
console.log(Mapa.get("Edad"));

console.log(Mapa.has("nombre"));
console.log(Mapa.size);
Mapa.delete("Apellido");
console.log(Mapa.has("Apellido"));


