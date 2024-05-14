// Función para inicializar el mapa
function initMap() {
    // Creamos un objeto mapa con las opciones de visualización
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12, // Zoom inicial
      // Centro del mapa (puedes ajustarlo a tus necesidades)
      center: { lat: -34.603722, lng: -58.381592 } // Coordenadas de Buenos Aires, Argentina (ejemplo)
    });
  
    // Creamos un marcador para la posición del usuario
    var marker = new google.maps.Marker({
      map: map,
      // Posición inicial del marcador (puedes ajustarlo a tus necesidades)
      position: { lat: -34.603722, lng: -58.381592 }, // Coordenadas de Buenos Aires, Argentina (ejemplo)
      title: '¡Estás aquí!'
    });
  
    // Intentamos obtener la ubicación del usuario
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
  
        // Centramos el mapa en la nueva posición
        map.setCenter(pos);
  
        // Movemos el marcador a la nueva posición
        marker.setPosition(pos);
      }, function() {
        // Manejo de errores
        alert('Error: No se pudo obtener la ubicación del usuario.');
      });
    } else {
      // El navegador no soporta geolocalización
      alert('Error: Tu navegador no soporta geolocalización.');
    }
  }