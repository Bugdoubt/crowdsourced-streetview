
const map = L.map('map').setView([51.5074, -0.1278], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const londonImages = [
  "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1506459225024-1428097a7e18?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1533681018184-e070d38e8de3?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
];

let currentIndex = 0;

const marker = L.marker([51.5074, -0.1278]).addTo(map)
  .bindPopup("London (Unsplash)")
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
