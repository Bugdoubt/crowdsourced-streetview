
const map = L.map('map').setView([51.5074, -0.1278], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const londonImages = [
  "https://live.staticflickr.com/65535/53118622644_0d5e11474f_z.jpg",
  "https://live.staticflickr.com/65535/53119030180_204e2b59cc_z.jpg",
  "https://live.staticflickr.com/65535/53117803197_6d21c3dd18_z.jpg",
  "https://live.staticflickr.com/65535/53119009145_81eb42a73f_z.jpg"
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
