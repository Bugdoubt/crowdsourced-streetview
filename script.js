
const map = L.map('map').setView([20, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const cities = {
  "New York": [40.7128, -74.0060],
  "London": [51.5074, -0.1278],
  "Paris": [48.8566, 2.3522],
  "Tokyo": [35.6762, 139.6503]
};

for (const [name, coords] of Object.entries(cities)) {
  L.marker(coords).addTo(map)
    .bindPopup(name)
    .on('click', () => {
      currentImageIndex = 0;
      updateImage();
    });
}

const images = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/June_odd-eyed-cat.jpg/640px-June_odd-eyed-cat.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/640px-Cat03.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/VAN_CAT.png/640px-VAN_CAT.png"
];

let currentImageIndex = 0;

function updateImage() {
  document.getElementById("photo").src = images[currentImageIndex];
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  updateImage();
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  updateImage();
}
