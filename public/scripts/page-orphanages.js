/* Tipos de Dados
String ""
Number 01
Object {}
Boolean true or false
Array []
*/

// create map
const map = L.map("mapid").setView([-10.8958202, -37.0680758], 16);
// .setView([latitude, longitude], zoom);

// create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "./public/assets/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// create popup overlay
const popup = L.popup({
  closeButton: false,
  className: "map-popup",
  minWidth: 240,
  minHeight: 240,
}).setContent(
  'Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"><img src="./public/assets/arrow-white.svg"></a>'
);

// create and add marker
L.marker([-10.8958202, -37.0680758], { icon }).addTo(map).bindPopup(popup);

//  .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
//  .openPopup();
