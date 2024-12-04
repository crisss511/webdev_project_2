function initMap() {
  const iitCoords = { lat: 41.83563922236108, lng: -87.62592116170968 };

  const map = new google.maps.Map(document.getElementById("map"), {
    center: iitCoords,
    zoom: 16, // Reasonable zoom level
    mapTypeId: google.maps.MapTypeId.SATELLITE,
  });

  const marker = new google.maps.Marker({
    position: iitCoords,
    map: map,
    title: "IIT MTCC",
    animation: google.maps.Animation.BOUNCE,
  });

  const infoWindow = new google.maps.InfoWindow({
    content: `
      <div class="info-window-content" style="color: black;">
        <h3>IIT MTCC</h3>
        <p>Welcome to IIT MTCC, Chicago!</p>
      </div>
    `,
  });

  marker.addListener("mouseover", () => {
    infoWindow.open(map, marker);
  });

  marker.addListener("mouseout", () => {
    infoWindow.close();
  });
}
