function buscarDestino(destino, fecha) {
  const vuelos = [
    { id: "AA123", origen: "Paris", destino: destino, fecha: fecha, precio: 300 },
    { id: "IB456", origen: "Belgica", destino: destino, fecha: fecha, precio: 250 }
  ];
  if (vuelos.length > 0) {
    console.log(`Vuelos para ${destino} el ${fecha}:`);
    vuelos.forEach(vuelo => console.log(`Vuelo ${vuelo.id}: $${vuelo.precio}`));
  } else {
    console.log("No hay vuelos disponibles.");
  }
}
buscarVuelos("Nueva York", "2025-09-15");