var info = document.getElementById("info");

var map = L.map('map').setView([37.1773, -3.5986], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap'
}).addTo(map);

var marker = null;

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    info.innerHTML = "Tu navegador no soporta la geolocalización.";
  }
}

function showPosition(position) {
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;

  info.innerHTML = "Latitud: " + lat + "<br>Longitud: " + lon;

  map.setView([lat, lon], 16);

  if (marker) {
    map.removeLayer(marker);
  }
  marker = L.marker([lat, lon]).addTo(map)
    .bindPopup("¡Estás aquí!")
    .openPopup();
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      info.innerHTML = "Has denegado el permiso de geolocalización.";
      break;
    case error.POSITION_UNAVAILABLE:
      info.innerHTML = "La ubicación no está disponible.";
      break;
    case error.TIMEOUT:
      info.innerHTML = "Se agotó el tiempo de espera.";
      break;
    default:
      info.innerHTML = "Error desconocido.";
  }
}