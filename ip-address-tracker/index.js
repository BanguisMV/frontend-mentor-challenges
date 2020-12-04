const ipAddress = document.getElementById("ip-address");
const ipLocation = document.getElementById("location");
const timezone = document.getElementById("timezone");
const isp = document.getElementById("isp");
const input = document.querySelector(".search-form");


var map = L.map('map');

let lat;
let lng;

const displayMap = () => {
  var markerIcon = L.icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [30, 50],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
  });


  map.setView([lat, lng], 9);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: false
  }).addTo(map);

  L.marker([lat, lng], {icon: markerIcon}).addTo(map)

};

const displayIpInfos = (data) => {
  ipAddress.innerText = data.ip;
  ipLocation.innerText = `${data.location.city}, ${data.location.country} ${data.location.postalCode}`;
  timezone.innerText = `UTC ${data.location.timezone}`;
  isp.innerText = data.isp;
};

const getData = (ipAddress = "") => {
fetch(`https://geo.ipify.org/api/v1?apiKey=at_KqBWGqFXjRDnTnay8hgbFu1wNDURH&ipAddress=${ipAddress}`)
  .then(response => response.json())
  .then(data => {
    lat = data.location.lat;
    lng = data.location.lng;
    displayIpInfos(data);
    displayMap();
  })
};

getData();

input.addEventListener("submit", event => {
  event.preventDefault()
  getData(event.target[0].value);
  console.log(event.target[0].value);
  event.target[0].value = "";

});
