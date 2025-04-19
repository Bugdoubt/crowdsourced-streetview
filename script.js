
const map = L.map('map').setView([51.5074, -0.1278], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const londonImages = [
  "https://live.staticflickr.com/65535/53661293729_3a905f5829_z.jpg",
  "https://live.staticflickr.com/65535/53661159128_9e6a0aa307_z.jpg",
  "https://live.staticflickr.com/65535/53660806696_67ae820d88_z.jpg",
  "https://live.staticflickr.com/65535/53660811576_1cce6e44fa_z.jpg"
];

let currentIndex = 0;

const marker = L.marker([51.5074, -0.1278]).addTo(map)
  .bindPopup("London")
  .on("click", () => {
    currentIndex = 0;
    updateImage();
  });

function updateImage() {
  const img = document.getElementById("photo");
  if (img && londonImages.length > 0) {
    img.src = londonImages[currentIndex];
  }
}

function nextImage() {
  currentIndex = (currentIndex + 1) % londonImages.length;
  updateImage();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + londonImages.length) % londonImages.length;
  updateImage();
}
