// create map
const map = L.map("mapid").setView([-10.8958202, -37.0680758], 16);

// create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "/assets/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

// create and add marker
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  // remove icon
  marker && map.removeLayer(marker);

  // add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// add photos field
function addPhotoField() {
  // pegar o container de fotos #images
  const containerImage = document.querySelector("#images");

  // pegar o container para duplicar .new-upload
  const fieldsContainerImage = document.querySelectorAll(".new-upload");

  // realizar o clone da última imagem adicionada.
  const clonedFieldContainerImage = fieldsContainerImage[
    fieldsContainerImage.length - 1
  ].cloneNode(true);

  // verificar se o campo está vazio, sem sim, não adicionar ao container de imagens
  const input = clonedFieldContainerImage.children[0];
  if (input.value == "") {
    return;
  }

  // limpar o campo antes de adicionar ao container de imagens
  input.value = "";

  // adicionar o clone ao container de #images
  containerImage.appendChild(clonedFieldContainerImage);
}

function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainerImage = document.querySelectorAll(".new-upload");

  if (fieldsContainerImage.lenght <= 1) {
    // limpar o valor do campo
    span.parentNode.children[0].value = "";
    return;
  }

  // deletar o campo
  span.parentNode.remove();
}

// select yes or no (troca do sim e não)
function toggleSelect(event) {
  // retirar a class .active dos botões
  document
    .querySelectorAll(".button-select button")
    .forEach((button) => button.classList.remove("active"));

  // colocar a class .active nesse botão clicado
  const button = event.currentTarget;
  button.classList.add("active");

  // atualizar o meu input hidden c/ o valor selecionado
  const input = document.querySelector("[name=open_on_weekends]");

  // verificar se sim ou não
  input.value = button.dataset.value;
}

function validate(event) {
  // validar se lat e lng estão preenchidos
  const latValue = document.querySelector("[name=lat]").value;
  const lngValue = document.querySelector("[name=lng]").value;

  if (latValue == "" && lngValue == "") {
    event.preventDefault();
    alert("Selecione um ponto no mapa.");
  }
}
