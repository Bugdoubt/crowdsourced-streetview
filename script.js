
const map = L.map('map').setView([20, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const cityImages = {
  "New York": {
    coords: [40.758, -73.9855],
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/4/4f/Times_Square_New_York_City_%28HDR%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/5/57/NYC_Times_Square_wide_angle.jpg"
    ]
  },
  "London": {
    coords: [51.5033, -0.1195],
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/e/e1/London_Eye_Twilight_April_2006.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/f/fd/Big_Ben_2012-06-25.jpg"
    ]
  },
  "Paris": {
    coords: [48.8584, 2.2945],
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Tour_Eiffel_Wikimedia_Commons.jpg/640px-Tour_Eiffel_Wikimedia_Commons.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/6/6e/Cathedrale_Notre-Dame_de_Paris.jpg"
    ]
  }
};

let currentCity = null;
let currentImageIndex = 0;

for (const [name, data] of Object.entries(cityImages)) {
  L.marker(data.coords).addTo(map)
    .bindPopup(name)
    .on('click', () => {
      currentCity = name;
      currentImageIndex = 0;
      updateImage();
    });
}

function updateImage() {
  if (currentCity) {
    const imageUrl = cityImages[currentCity].images[currentImageIndex];
    const img = document.getElementById("photo");
    if (img) {
      img.src = imageUrl;
    }
  }
}

function nextImage() {
  if (currentCity) {
    const imgs = cityImages[currentCity].images;
    currentImageIndex = (currentImageIndex + 1) % imgs.length;
    updateImage();
  }
}

function prevImage() {
  if (currentCity) {
    const imgs = cityImages[currentCity].images;
    currentImageIndex = (currentImageIndex - 1 + imgs.length) % imgs.length;
    updateImage();
  }
}
