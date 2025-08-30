function reservaHotel(hotel, date) {
  fetch('https://api.hotels.com/reservations')
    .then(response => response.json())
    .then(data => console.log(`Réservation à ${hotel} pour ${date}`));
}
reservaHotel("Hôtel Plage", "2025-09-15");