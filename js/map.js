var map = L.map('map').setView([51.2127394, 4.4447566], 12);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.2127394, 4.4447566]).addTo(map)
    .bindPopup('Woonplaats Darrell Morel')
    .openPopup();

var circle = L.circle([51.2127394, 4.4447566], {
    color: '#32C0F0',
    fillColor: '#002569',
    fillOpacity: 0.2,
    radius: 1600
}).addTo(map);